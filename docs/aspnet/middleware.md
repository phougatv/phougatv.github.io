---
sidebar_position: 2
tags: [dotnet, aspnet, middleware, middleware-pipeline]
author: phougatv
---

# Middleware and request pipeline
In this post we will discuss and learn about request delegate and middleware, and and how do they form request pipeline?

## I. Request delegate
We'll first start with [RequestDelegate][rd-msdn] — what is it and the role it plays in ASP.NET Core request-pipeline.

### What is it?
[RequestDelegate][rd-msdn] is a delegate that represents a method capable of processing an HTTP request. It's declaration is simple:
```cs
public delegate Task RequestDelegate(HttpContext context);
```
It accepts a param of type `HttpContext` and returns a `Task`, allowing asynchronous request handling. For full source code visit [GitHub][rd-src].

### Its role in the pipeline
The [RequestDelegate][rd-msdn] forms the building block of the request pipeline. It provide a _mechanism_ to invoke the next middleware component in the pipeline.
Each middleware typically stores a reference to the next middleware in the pipeline like this:
```cs
private readonly RequestDelegate _next;
```

In essence, [RequestDelegate][rd-msdn] enables the pipeline to be composed as a chain of methods — each able to process the request, optionally handle the response, and pass the control onward.

## II. Middleware
Middleware is a piece of code that defines `Invoke` method and can inspect, modify, or short-circuit the request-pipeline.
It can be defined either as an in-line anonymous method or as a reusable class.

In a typical middleware, there is a `_next` field of type [RequestDelegate][rd-msdn] which points to the `Invoke` method of the next middleware in the pipeline.
When a middleware calls `await _next(context)`, it passes control forward to the next component.
The chain continues until the end of the pipeline is reached or until a middleware short-circuits it.

### Middleware as anonymous method
In this approach the middleware is defined and registered in a single step as an in-line anonymous method. It is good for scenarios where we need:
- simplicity for small tasks, such as adding a custom header either to the request or to the reponse.
- easy debugging, since the logic is within the `Program.cs` file.
- to reduces boilerplate code by avoiding the need to create separate class for simple logic and requirements.

:::info
In inline middleware, `next` is of type [RequestDelegate][rd-msdn] that represents the next middleware's `Invoke` method in the pipeline.
:::

```cs
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// 1st middleware
app.Use(async (context, next) =>
{
    Console.WriteLine("Do work before invoking the 2nd middleware");
    await next(context);
    Console.WriteLine("Do work after invoking the 2nd middleware");
});

// 2nd middleware
app.Use(async (context, next) =>
{
    Console.WriteLine("Do work before invoking the 3rd middleware");
    await next(context);
    Console.WriteLine("Do work after invoking the 3rd middleware");
});

// 3rd middleware
app.Run(async context =>
{
    Console.WriteLine("Do work before writing to response");
    await context.Response.WriteAsync("Hello from 3rd (Run) middleware.");
    Console.WriteLine("Do work after writing to response");
});

app.Run();
```

The output of the above-mentioned code snippet is:
```bash
Do work before invoking the 2nd middleware
Do work before invoking the 3rd middleware
Do work before writing to response
Do work after writing to response
Do work after invoking the 3rd middleware
Do work after invoking the 2nd middleware
```
And the message `"Hello from 3rd (Run) middleware."` will be returned as the reponse and can be seen in the browser when calling any of the endpoints of the application.

### Middleware as a separate class
In this approach we will define the middleware in a separate class and then register it using `UseMiddleware<T>` extension method. It is good for scenarios where we need:
- Modularity – each middleware focuses on a specific task, improving code clarity and separation of concerns.
- Reusability – logic like authentication can be reused across multiple services.
- Maintainability – any update to functionality require changes in only one place.

```cs
//=== Defining the middleware ===
namespace Middleware.ReusableClassExample;

public class ReusableClassMiddleware
{
    private readonly RequestDelegate _next;
    public ReusableClassMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    public async Task InvokeAsync(HttpContext context)
    {
        Console.WriteLine("Do work before calling the next middleware");
        await _next(context);  // Call the next middleware in the pipeline.
        Console.WriteLine("Do work after calling the next middleware");
    }
}

//=== Exposing the middleware via extension method on IApplicationBuilder ===
public static class ReusableClassMiddlewareExtentsions
{
    public static IApplicationBuilder UseReusableClass(
        this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<ReusableClassMiddleware>();
    }
}

//=== Registering the middleware in request pipeline in Program.cs ===
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseReusableClass();

app.Run();
```

### `Use` extension method
`Use` is an extension method, source code [here][use-src], which allows us to chain multiple middleware components together in the form of pipeline. There are multiple overloads of this `Use` extension method, here is one of its definition:
```cs
public static IApplicationBuilder Use(
    this IApplicationBuilder app,
    Func<HttpContext, Func<Task>, Task> middleware)
{
    return app.Use(next =>  // This `Use` method is defined in the `ApplicationBuilder` class
    {
        return context =>
        {
            Func<Task> simpleNext = () => next(context);
            return middleware(context, simpleNext);
        };
    });
}
```

### Terminal middleware
Each middleware in the request pipeline can either invoke the next middleware or short-circuit the pipeline by not calling or skipping the next middleware call, effectively ending further request processing and returning a response.

A middleware that short-circuits the request pipeline, by not calling the next middleware, is known as the _terminal middleware_.

There are a number of reasons why a middleware might decide to short-circuit the rest of the pipeline:
- The request failed authentication or authorization
- The request only needed to access static files, which were found and served — no need to go any further.
- A rate limiter kicked in because the client sent too many requests.

In all these cases, the middleware doesn't just stop — it knows there’s no point in continuing. It handles the response then and there, saving time, resources, and protecting the application.

## III. Request pipeline
The request pipeline consists of a sequence of middleware components chained one after the other.

## IV. Learn more
- [Middleware order](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware#middleware-order)
- [Prefer `app.Use` overload that requires passing the context to `next`](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware#prefer-appuse-overload-that-requires-passing-the-context-to-next)
- [Branching the middleware pipeline](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware#branch-the-middleware-pipeline)
- [Write custom middleware](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/write)
- [Factory-based middleware activation](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/extensibility)


<!-- external links -->
[rd-msdn]:https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.requestdelegate
[rd-src]:https://github.com/dotnet/aspnetcore/blob/main/src/Http/Http.Abstractions/src/RequestDelegate.cs
[md-use]:https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.builder.useextensions.use
[use-src]:https://github.com/dotnet/aspnetcore/blob/main/src/Http/Http.Abstractions/src/Extensions/UseExtensions.cs
[map-src]:https://github.com/dotnet/aspnetcore/blob/main/src/Http/Http.Abstractions/src/Extensions/MapExtensions.cs
[run-src]:https://github.com/dotnet/aspnetcore/blob/main/src/Http/Http.Abstractions/src/Extensions/RunExtensions.cs