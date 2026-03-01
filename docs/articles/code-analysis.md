---
title: ''
sidebar_label: Code Analysis
sidebar_position: 3
---

## 1. Scope
- It covers
  - Why code analysis matters
  - Links and explaination on how to config and use
    - Built-in .NET analysis
    - SonarQube analysis
  - Links to deeper rule documentation
- It avoids
  - Deep dives into individual rules (design, performance, security)
  - Replacing official Microsoft or Sonar documentation
  - Designing or developing your own code analyzer

## 2. What is code analysis in .NET
In .NET, code analysis refers to the process of examining your C# source code to identify security, performance, maintainability, style violations, and other issues. This analysis happens during design time in all open files (_also known as static code analysis_).

The analyzers can be divided into 2 main categories:
1. **Built-in .NET analyzers**: There are 2 types of analyzers that come with the .NET 5.0 and later SDKs and enabled by default; _code quality_ and _code style_ analyzers. Code quality analyzers focus on identifying security, performance, design, and maintainability issues, while code style analyzers enforce consistent coding styles and conventions.
2. **3rd party analyzers**: [StyleCop][18], [SonarQube][19], [xUnit Analyzers][20], and [Roslynator][21] are some popular examples. They can be used either as NuGet packages or Visual Studio extensions.

### 2.1 Why it matters
Because it improves the software quality, security, performance, design, maintainability, etc., of your codebase by automatically analyzing the source code against a set of predefined rules and best practices.

It:
- Helps in detecting issues (_that often show up in production_) early in the development cycle, when they are cheaper and easier to fix.
- Flags security and performance risks before they become problems in production.
- Promotes consistent coding patterns which makes the code more readable and easier to understand, especially for someone who is new to the project.

Think of it as a second set of eyes: quick, tireless, and never skipping a review.

## 3. Built-in .NET analysis (and ASP.NET Core)
These analyzers are part of the .NET SDK and you don't need to install them separately. They are enabled by default for projects that target .NET 5 or later. You can also disable them, if needed, by setting the [EnableNETAnalyzers][1] property to `false`.
```xml
<PropertyGroup>
  <EnableNETAnalyzers>false</EnableNETAnalyzers>
</PropertyGroup>
```

A certain number of [rules are enabled][2], by default, as errors or warnings while others are enabled as suggestions. But the remaining ones can also be [enabled][3].
- List of all built-in
  - [Code quality rules][13]
  - [Code style rules][22]
- List of rules that are included with each .NET SDK version, see [Analyzer releases][14]

:::tip
For ASP.NET Core apps check out [code analysis in ASP.NET Core apps][10]
:::

### 3.1 Configuring analysis in .NET apps
- **Configuration options**
  - You can configure code analysis rules in .NET apps using either [`.editorconfig`][15] or [Global `AnalyzerConfig`][16] files. Other options are available as MSBuild properties, see [code analysis properties][4].
  - See [Precedence and Severity options][6] to know how conflicts are resolved when there are multiple entries with the same key but different values (_in different files_).
  - [Editorconfig vs Global analyzerconfig][9]
  - A [classic user mistake][17]

:::info
If you configure code analysis using MSBuild properties like `AnalysisMode`, any _bulk_ settings in your   configuration file are ignored.
For example, if you've enabled all rules or a category of rules in an `.editorconfig` file, then those   configurations are ignored.
:::

- **Configure options via MSBuild properties (for broad control)**: The following options apply analysis as a whole, they cannot be applied only to specific rules.
  - [Analysis mode](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/configuration-options#analysis-mode)
  - [Enable code analysis](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/configuration-options#enable-code-analysis)
  - [Exclude generated code](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/configuration-options#exclude-generated-code)

- **Configure options via configuration files (for granular control)**: The following options can be applied to a single rule, a set of rules, or all rules. These options include:
  - Set severity level
    - [Customize Roslyn analyzer rules][11]
    - [How to set severity for rules](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/configuration-options#scope)
    - [Severity table](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/configuration-options#severity-level)
    
  - There are options other than _severity_ that can be configured for code quality rules, see [Code quality rules configuration](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/code-quality-rule-options)

:::info
- [Configure live code analysis][24]
- [Run code analysis manually][25]
- [Disable code analysis][26]
:::

If there are multiple severity configuration entries that can be applied to the same rule ID, then [precedence][6] comes into effect.

### 3.2 Suppress warning
- [Suppress code analysis violations][23]
- [How to suppress code analysis warnings][7]

### 3.3 Code metrics

:::caution
- [What are code metrics and how do they relate to code analysis?](https://learn.microsoft.com/en-in/visualstudio/code-quality/code-metrics-values?view=visualstudio)
:::

---

[1]:https://learn.microsoft.com/en-us/dotnet/core/project-sdk/msbuild-props#enablenetanalyzers
[2]:https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/overview?tabs=net-10#enabled-rules
[3]:https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/overview?tabs=net-8#enable-additional-rules
[4]:https://learn.microsoft.com/en-us/dotnet/core/project-sdk/msbuild-props#code-analysis-properties
[5]:https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/configuration-options#severity-level
[6]:https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/configuration-options#precedence
[7]:https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/suppress-warnings
[8]:https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/configuration-files
[9]:https://github.com/dotnet/roslyn/issues/47707
[10]:https://learn.microsoft.com/en-us/aspnet/core/diagnostics/code-analysis?view=aspnetcore-10.0
[11]:https://learn.microsoft.com/en-in/visualstudio/code-quality/use-roslyn-analyzers?view=visualstudio
[12]:https://learn.microsoft.com/en-in/dotnet/fundamentals/code-analysis/code-quality-rule-options?view=visualstudio
[13]:https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/
[14]:https://github.com/dotnet/sdk/blob/main/src/Microsoft.CodeAnalysis.NetAnalyzers/src/Microsoft.CodeAnalysis.NetAnalyzers/AnalyzerReleases.Shipped.md
[15]:https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/configuration-files#editorconfig
[16]:https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/configuration-files#global-analyzerconfig
[17]:https://github.com/dotnet/roslyn/issues/43080#issuecomment-688816162
[18]:https://github.com/DotNetAnalyzers/StyleCopAnalyzers
[19]:https://www.sonarsource.com/products/sonarqube/ide/features/visual-studio/
[20]:https://github.com/xunit/xunit.analyzers
[21]:https://github.com/dotnet/roslynator
[22]:https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/style-rules/
[23]:https://learn.microsoft.com/en-in/visualstudio/code-quality/in-source-suppression-overview
[24]:https://learn.microsoft.com/en-in/visualstudio/code-quality/configure-live-code-analysis-scope-managed-code
[25]:https://learn.microsoft.com/en-in/visualstudio/code-quality/how-to-run-code-analysis-manually-for-managed-code
[26]:https://learn.microsoft.com/en-in/visualstudio/code-quality/disable-code-analysis