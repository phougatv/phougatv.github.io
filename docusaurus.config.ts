import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Evolving Engineer',
    tagline: 'Stop guessing. Start engineering.',
    // favicon: 'img/favicon.ico',

    stylesheets: [
        {
            // Display font — used for headings, navbar brand, footer copyright
            href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap',
            type: 'text/css',
        },
        {
            // Monospace font — used for all code blocks and inline code
            href: 'https://fonts.googleapis.com/css2?family=Google+Sans+Code:wght@400;500;600;700&display=swap',
            type: 'text/css',
        },
        {
            // Body fallback for non-Windows — only loaded when Segoe UI is absent
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
            type: 'text/css',
        }
    ],

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://phougatv.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'phougatv', // Usually your GitHub org/user name.
    projectName: 'phougatv.github.io', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/', // Serve docs at the root
                    sidebarPath: './sidebars.ts',
                    onInlineTags: 'throw'
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Evolving Engineer',
            //logo: {
            //    alt: 'My Site Logo',
            //    src: 'img/logo.svg',
            //},
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'articleSidebar',
                    position: 'left',
                    label: 'Articles',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                //========== Simple layout ==========
                {
                    label: 'LinkedIn',
                    to: 'https://linkedin.com/in/phougatv'
                },
                {
                    label: 'GitHub',
                    to: 'https://github.com/phougatv'
                },
                {
                    label: 'StackOverflow',
                    to: 'https://stackoverflow.com/users/3591973/phougatv'
                },
                {
                    label: 'X (Twitter)',
                    to: 'https://x.com/phougatv'
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Evolving Engineer, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: {
                ...prismThemes.vsLight,
                plain: {
                    ...prismThemes.vsLight.plain,
                    backgroundColor: '#f3f4f6'
                }
            },
            darkTheme: {
                ...prismThemes.vsDark,
                plain: {
                    ...prismThemes.vsDark.plain,
                    backgroundColor: '#2d3139'
                }
            },
            additionalLanguages: ['csharp']
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
