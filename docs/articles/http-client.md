---
sidebar_label: HttpClient Best Practices
sidebar_position: 3
title: ''
---

## Approach
We will first showcase its common usage and why it is not recommended, because it leads to
- [ ] Socket exhaustion (_explain in detail, how it happens, and how to detect it_)

Then we will discuss the recommended approach to use `HttpClient` in .NET, prior to `IHttpClientFactory` and after it, and the benefits of using `IHttpClientFactory` over the original `HttpClient` class.
- [ ] Using `HttpClient` in .NET prior to `IHttpClientFactory` and its issues.
- [ ] Using `IHttpClientFactory` to create `HttpClient` and its benefits over the original `HttpClient` class.