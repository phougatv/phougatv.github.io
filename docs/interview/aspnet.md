---
sidebar_position: 2
---

# ASP.NET
ASP.NET Core and MVC interview questions.

## Middleware
#### 1. What is middleware in ASP.NET Core? Explain different ways we can define middleware?

#### 2. What is request-response or middleware pipeline in ASP.NET Core? What is the underlying problem it solves? What design pattern it is based on? How does it works under the hood?

#### 3. In ASP.NET Core why middleware pipeline was choosen over HTTP Handlers and Modules for handling requests and responses?

#### 4. Let's say we have a number of `GET` endpoints (web APIs) and we need to control the number of incoming requests made to them within a certain time-frame, how can it be done?

#### 5. How can we share data between 2 middlewares within the scope of current request? How does `HttpContext.Items` differs from `HttpContext.Features`?


Learn more
- [HttpContext.Features vs HttpContext.Items in ASP.NET Core](https://stackoverflow.com/questions/51996907/httpcontext-features-vs-httpcontext-items-in-asp-net-core)
- [HttpContext.Features vs HttpContext.Items](https://stackoverflow.com/questions/51996907/httpcontext-features-vs-httpcontext-items-in-asp-net-core)

#### 6. Does order of middleware matter? Explain what will happen if we put `UseAuthorization` middleware before `UseRouting`?

#### 7. Explain the difference between `.Use()`, `.Map()`, and `.Run()`?

#### 8. Explain convention-based middleware. How does ASP.NET Core resolve dependencies for convention-based middleware? What lifecycle do convention-based middleware instances follow? Can we inject scoped services into the constructor of a convention-based middleware? Explain.

#### 9. In middleware, what is pipeline branching? How will you apply GDPR cookie consent only for EU users?

#### 10. What is _short-circuiting the request pipeline_? What is a terminal middleware?