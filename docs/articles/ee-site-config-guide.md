---
title: 'Docusaurus Configuration'
sidebar_label: Docusaurus Configuration
---

## 1. Switching themes
All visual theming lives in one file: `src/css/custom.css`. The file is split into two token blocks:
```css
:root { /* light mode */ }
[data-theme='dark'] { /* dark mode */ }
```

To change the **color scheme**, you touch these tokens only. Nothing else in the file needs to change:
```css
/* In :root — light mode */
--ifm-color-primary:          #3578e5;   /* link color, active states */
--ifm-background-color:        #ffffff;   /* page background */
--ifm-navbar-background-color: #f6f8fa;   /* navbar */
--ifm-footer-background-color: #f6f8fa;   /* footer */
--ifm-font-color-base:         #24292e;   /* body text */
--ifm-code-background:         #e8ecf4;   /* inline code background */
--ee-heading-border:           #d0d0d0;   /* border under h1, h2 */
--ee-hr-color:                 #d0d7de;   /* <hr> color */
--ee-link-visited:             #6639ba;   /* visited link color */

/* In [data-theme='dark'] — dark mode */
--ifm-color-primary:          #25c2a0;
--ifm-background-color:        #1f1f1f;
--ifm-navbar-background-color: #292929;
--ifm-footer-background-color: #292929;
--ifm-font-color-base:         #e0e0e0;
--ifm-code-background:         #22262f;
--ee-heading-border:           #666666;
--ee-hr-color:                 #666666;
--ee-link-visited:             #bc8cff;
```

To change **fonts**, update these three tokens in `:root`:

```css
--ifm-font-family-base:      'Segoe UI', 'Inter', system-ui, sans-serif;
--ifm-font-family-monospace: 'Google Sans Code', 'JetBrains Mono', monospace;
--ee-font-family-display:    'Lora', serif;   /* headings, navbar brand, footer copyright */
```

Then make sure the font you add here is also loaded in `docusaurus.config.ts` under `stylesheets`.
If it's not loaded there, the browser will skip it and use the next fallback.

## 2. Blog vs Docs
Both are controlled in `docusaurus.config.ts` inside the `presets` array.

### Docs only (current setup)
```ts
docs: {
    routeBasePath: '/',   // serves docs at yourdomain.com/ instead of /docs
    sidebarPath: './sidebars.ts',
},
blog: false,
```

### Both together
```ts
docs: {
    sidebarPath: './sidebars.ts',
    // docs will live at yourdomain.com/docs
},
blog: {
    showReadingTime: true,
    routeBasePath: '/blog',
},
```

When you enable the blog, also add the navbar link:

```ts
// in navbar.items
{
    to: '/blog',
    label: 'Blog',
    position: 'left',
}
```

> **Note on `onInlineTags`:** Currently set to `'throw'` for docs. This means if you use a tag in a markdown file that isn't defined in your tags file, the build fails. Change to `'warn'` if you want a softer warning instead of a build error.

## 3. Footer
You have two layouts available. Switch between them by replacing the `links` array.

### Current — Simple flat list
Renders as a single row of links. No titles, no columns.

```ts
footer: {
    style: 'dark',
    links: [
        { label: 'LinkedIn',     to: 'https://linkedin.com/in/phougatv' },
        { label: 'GitHub',       to: 'https://github.com/phougatv' },
        { label: 'StackOverflow',to: 'https://stackoverflow.com/users/3591973/phougatv' },
        { label: 'X (Twitter)',  to: 'https://x.com/phougatv' },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Evolving Engineer, Inc.`,
},
```

### Multi-column layout

Each object in the array becomes a column. The `title` is the column heading. `items` are the links.

```ts
footer: {
    style: 'dark',
    links: [
        {
            title: 'Code',
            items: [
                { label: 'GitHub',        to: 'https://github.com/phougatv' },
                { label: 'StackOverflow', to: 'https://stackoverflow.com/users/3591973/phougatv' },
            ],
        },
        {
            title: 'Social',
            items: [
                { label: 'LinkedIn',    to: 'https://linkedin.com/in/phougatv' },
                { label: 'X (Twitter)', to: 'https://x.com/phougatv' },
            ],
        },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Evolving Engineer, Inc.`,
},
```

> You cannot mix the two formats. It's either all flat or all columnar.

## 4. Code block themes
Controlled entirely in `docusaurus.config.ts` under `themeConfig.prism`.

```ts
prism: {
    theme: {
        ...prismThemes.vsLight,   // ← change this for light mode
        plain: {
            ...prismThemes.vsLight.plain,
            backgroundColor: '#f3f4f6',   // ← subtle bg distinct from page white
            fontFamily: "'Google Sans Code', 'JetBrains Mono', monospace",
        },
    },
    darkTheme: {
        ...prismThemes.vsDark,    // ← change this for dark mode
        plain: {
            ...prismThemes.vsDark.plain,
            backgroundColor: '#2d3139',   // ← distinct from #1f1f1f page bg
            fontFamily: "'Google Sans Code', 'JetBrains Mono', monospace",
        },
    },
    additionalLanguages: ['csharp'],
},
```

### Available built-in themes

Import from `prism-react-renderer`:

```ts
import { themes as prismThemes } from 'prism-react-renderer';
```

| Theme name | Style |
|---|---|
| `prismThemes.github` | GitHub light |
| `prismThemes.vsLight` | VS Code light ← current |
| `prismThemes.vsDark` | VS Code dark ← current |
| `prismThemes.dracula` | Dracula dark |
| `prismThemes.nightOwl` | Night Owl dark |
| `prismThemes.okaidia` | Okaidia dark |
| `prismThemes.shadesOfPurple` | Purple dark |

To switch theme, replace `prismThemes.vsLight` / `prismThemes.vsDark` with any from the table above.

### Adding a language

```ts
additionalLanguages: ['csharp', 'powershell', 'sql'],
```

Full list of supported languages: [prismjs.com/components](https://prismjs.com/components/)

## 5. `_category_.json` - what it does
This file controls how a **folder** appears in the sidebar. Without it, Docusaurus uses the folder name as the label (with underscores and lowercase).

### Where it goes

```
docs/
└── dotnet/
    ├── _category_.json   ← controls this folder's sidebar entry
    ├── basics.md
    └── advanced.md
```

### What it does

```json
{
  "label": "C# .NET",
  "position": 2,
  "collapsible": true,
  "collapsed": true,
  "link": {
    "type": "generated-index",
    "description": "C# and .NET fundamentals and patterns."
  }
}
```

| Key | What it does |
|---|---|
| `label` | The text shown in the sidebar for this folder |
| `position` | Order relative to other items at the same level |
| `collapsible` | Whether the folder can be collapsed |
| `collapsed` | Whether it starts collapsed |
| `link.type: "generated-index"` | Creates a clickable index page listing all docs in the folder |
| `link.type: "doc"` | Makes the folder link directly to a specific doc |

> If you don't need an intro page, omit `link` entirely. The folder will still appear in the sidebar but won't be clickable itself — only its children will be.

## 6. Navbar links and sidebars

### How they connect
A navbar item of type `docSidebar` points to a sidebar ID defined in `sidebars.ts`.

```ts
// docusaurus.config.ts
{
    type: 'docSidebar',
    sidebarId: 'dotnetSidebar',   // ← must match key in sidebars.ts
    position: 'left',
    label: 'C# .NET',
}
```

```ts
// sidebars.ts
const sidebars: SidebarsConfig = {
    dotnetSidebar: [{ type: 'autogenerated', dirName: 'dotnet' }],
    //             ↑ this key matches sidebarId above
    //                                      ↑ this is the folder in /docs
};
```

So the chain is: **navbar label → sidebarId → sidebars.ts key → docs folder**.

### Adding a new section

1. Create a folder under `docs/`, e.g. `docs/system-design/`
2. Add a sidebar entry in `sidebars.ts`:
   ```ts
   systemDesignSidebar: [{ type: 'autogenerated', dirName: 'system-design' }],
   ```
3. Add the navbar item in `docusaurus.config.ts`:
   ```ts
   {
       type: 'docSidebar',
       sidebarId: 'systemDesignSidebar',
       position: 'left',
       label: 'System Design',
   }
   ```

### External links in navbar

```ts
{
    href: 'https://github.com/phougatv',
    label: 'GitHub',
    position: 'right',
}
```

Use `href` for external URLs, `to` for internal paths.

## 7. Authors - add and update
Authors are defined in `blog/authors.yml`. Since blog is currently off, this only matters when you re-enable it.

### File location
```
your-project/
└── blog/
    └── authors.yml   ← lives here
```

### Format
```yaml
phougatv:
  name: Praveen Hougat
  title: Senior Software Engineer
  url: https://github.com/phougatv
  image_url: https://github.com/phougatv.png
  socials:
    linkedin: phougatv
    x: phougatv
    github: phougatv
```

### Using an author in a post
In the markdown frontmatter:

```yaml
---
title: My Post Title
authors: [phougatv]
tags: [csharp, dotnet]
---
```

Multiple authors:

```yaml
authors: [phougatv, someOtherAuthorKey]
```

### Updating an author
Just edit `authors.yml`. The key (`phougatv:`) is what connects the author to posts — do not change the key, only the values under it.

## 8. Content structure - keep it simple

### Current over-engineering trap
Having separate `dotnetSidebar` and `aspnetSidebar` when there are maybe 5 articles total means you're maintaining infrastructure for content that doesn't exist yet. The sidebar is nearly empty, which looks worse than a full one.

### Recommended structure now
Flatten everything into one sidebar. Use **tags** to classify, not folders.

```
docs/
├── index.md                  ← landing page
├── csharp-basics.md          ← tags: [csharp, dotnet]
├── asp-middleware.md         ← tags: [aspnet, dotnet]
├── interview-solid.md        ← tags: [interview, csharp]
└── learning-sources.md
```

```ts
// sidebars.ts — one sidebar, autogenerated
const sidebars: SidebarsConfig = {
    mainSidebar: [{ type: 'autogenerated', dirName: '.' }],
};
```

```ts
// docusaurus.config.ts — one navbar item
{
    type: 'docSidebar',
    sidebarId: 'mainSidebar',
    position: 'left',
    label: 'Notes',
}
```

### When to add structure
Once you have ~20+ articles, you'll naturally see clusters. That's when you create subfolders and split sidebars. Not before.

### Tags in frontmatter
```yaml
---
title: Understanding Middleware in ASP.NET Core
tags: [aspnet, dotnet, middleware]
---
```

Docusaurus automatically generates a `/tags` page and per-tag listing pages. Zero config needed.

## 9. Things worth knowing
### `routeBasePath: '/'` on docs
This is already set and it means your docs are at `yourdomain.com/` not `yourdomain.com/docs`. If you ever re-enable the blog, you'll need to give docs a non-root path or the routes will conflict:
```ts
docs: { routeBasePath: '/notes' },
blog: { routeBasePath: '/' },  // or '/blog'
```

### `onBrokenLinks: 'throw'`
Good. This means a broken internal link fails the build — you find out before deploying. Keep it.

### `future: { v4: true }`
This is already set. It opts into Docusaurus v4 compatibility behavior. Keep it — removes migration pain later.

### `i18n`
Currently English only. If you ever add Hindi or another language, you add it here:
```ts
i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi'],
},
```

Then run `docusaurus write-translations --locale hi` to generate translation files.

### Social card image
```ts
image: 'img/docusaurus-social-card.jpg',
```

This is the image shown when someone shares a link to your blog on LinkedIn/Twitter. Replace the default Docusaurus one with something that says "Evolving Engineer". It lives at `static/img/`.

### `onInlineTags: 'throw'` vs `'warn'`
Currently `'throw'` for docs — build fails if you use an undefined tag. Good for discipline. If it becomes annoying while drafting, switch to `'warn'` temporarily.

### Deploying to GitHub Pages
Your config already has the right settings:

```ts
url: 'https://phougatv.github.io',
baseUrl: '/',
organizationName: 'phougatv',
projectName: 'phougatv.github.io',
```

Deploy command: `npm run deploy` (uses `gh-pages` branch automatically).