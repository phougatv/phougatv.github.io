---
title: ''
sidebar_label: Best Practices & Guidelines
sidebar_position: 0
---

## 1. Framework design guidelines
- [Framework Design Guidelines - MSDN](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/)

## 2. Code analysis and quality
- Code quality rules
  - [Design rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/design-warnings)
  - [Documentation rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/documentation-warnings)
  - [Globalization rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/globalization-warnings)
  - [Portability and interoperability rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/interoperability-warnings)
  - [Maintainability rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/maintainability-warnings)
  - [Naming rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/naming-warnings)
  - [Performance rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/performance-warnings)
  - [SingleFile rules](https://learn.microsoft.com/en-us/dotnet/core/deploying/single-file/warnings/overview)
  - [Reliability rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/reliability-warnings)
  - [Security rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/security-warnings)
  - [Usage rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/usage-warnings)
- Code style rules
  - [Language and unnecessary rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/style-rules/language-rules)
  - [Miscellaneous rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/style-rules/miscellaneous-rules)
  - [Formatting rule (IDE0055)](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/style-rules/ide0055)
  - [Code-style naming rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/style-rules/naming-rules)

## 3. `HttpClient` guidelines
- [`HttpClient` Guidance](https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/HttpClientGuidance.md) by David Fowler
- [Guidelines for using `HttpClient`](https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient-guidelines)
- [Issues with the original `HttpClient` class available in .NET](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/use-httpclientfactory-to-implement-resilient-http-requests#issues-with-the-original-httpclient-class-available-in-net)
- [How to use the `IHttpClientFactory` interface to create `HttpClient`](https://learn.microsoft.com/en-us/dotnet/core/extensions/httpclient-factory)
- [Common `IHttpClientFactory` Usage Issues](https://learn.microsoft.com/en-us/dotnet/core/extensions/httpclient-factory-troubleshooting)
- [Keyed DI support in `IHttpClientFactory`](https://learn.microsoft.com/en-us/dotnet/core/extensions/httpclient-factory-keyed-di)
- [Learn how to make HTTP requests with `HttpClient` class](https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient)

## 4. `async/await` guidelines
- [Async Guidelines](https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AsyncGuidance.md) by David Fowler
- [Best Practices in Asynchronous Programming](https://learn.microsoft.com/en-us/archive/msdn-magazine/2013/march/async-await-best-practices-in-asynchronous-programming)
- `Task.Run` Etiquette by Stephen Cleary
  - [Overview](https://blog.stephencleary.com/2013/10/taskrun-etiquette-and-proper-usage.html)
  - [`Task.Run` Etiquette Examples: Don't Use `Task.Run` for the Wrong Thing](https://blog.stephencleary.com/2013/11/taskrun-etiquette-examples-using.html)
  - [`Task.Run` Etiquette Examples: Don't Use `Task.Run` in the Implementation](https://blog.stephencleary.com/2013/11/taskrun-etiquette-examples-dont-use.html)
  - [`Task.Run` Etiquette Examples: Even in the Complex Case, Don't Use `Task.Run` in the Implementation](https://blog.stephencleary.com/2013/11/taskrun-etiquette-examples-even-in.html)

## 5. Memory management guidelines
- [Dispose Pattern](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/dispose-pattern)
- [`IDisposable.Dispose` Method](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable.dispose)
- [`IDisposable`: What Your Mother Never Told You About Resource Deallocation](https://www.codeproject.com/articles/IDisposable-What-Your-Mother-Never-Told-You-About) by Stephen Cleary
<!-- - [`IDisposable`: What Your Mother Never Told You About Resource Deallocation](https://www.codeproject.com/KB/dotnet/IDisposable.aspx) by Stephen Cleary -->

## 6. Diagnostics, instrumentation, observability, and tracing
- [Diagnostics and Instrumentation](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/)
- [.NET Observability with OpenTelemetry](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/observability-with-otel)
- [.NET Metrics](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/metrics)
- [Distributed Tracing](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/distributed-tracing)
- [.NET Diagnostic Tools](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/tools-overview)
- [.NET Diagnostic Tools Scenario based Tutorials](https://github.com/dotnet/diagnostics/tree/main/documentation/tutorial)

## 7. Profiling guidelines
- [PerfTips](https://learn.microsoft.com/en-us/visualstudio/profiling/perftips)
- [PerfView Tutorial](https://learn.microsoft.com/en-us/shows/perfview-tutorial/)
- [dotnet-monitor Fundamentals](https://www.youtube.com/playlist?list=PLdo4fOcmZ0oUrIpaRjU9gG1fKb64izSF-)
- [First look at profiling tools](https://learn.microsoft.com/en-us/visualstudio/profiling/profiling-feature-tour)
- [Which performance tool should I use?](https://learn.microsoft.com/en-us/visualstudio/profiling/choose-performance-tool)
- [Beginner's guide to optimizing code and reducing compute costs](https://learn.microsoft.com/en-us/visualstudio/profiling/optimize-code-using-profiling-tools)
- [Isolate a performance issue](https://learn.microsoft.com/en-us/visualstudio/profiling/isolate-performance-issue)
- [Measure application performance by analyzing CPU utilization](https://learn.microsoft.com/en-us/visualstudio/profiling/beginners-guide-to-performance-profiling)
- [Measure memory usage in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/profiling/memory-usage)
- [Understand profiler performance collection methods](https://learn.microsoft.com/en-us/visualstudio/profiling/understanding-performance-collection-methods-perf-profiler)

## 8. Bash & Powershell
- [Bash for Beginners](https://learn.microsoft.com/en-us/shows/bash-for-beginners/)
- [Advanced Powershell Scripts](https://learn.microsoft.com/en-us/shows/gurupowershell/)