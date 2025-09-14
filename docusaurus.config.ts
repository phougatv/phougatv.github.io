import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Evolving Engineer',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    stylesheets: [
        {
            href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Google+Sans+Code:wght@100;200;300;400;500;600;700;800;900&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@100;200;300;400;500;600;700;800;900&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Segoe+UI:wght@100;200;300;400;500;600;700;800;900&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Gabarito:wght@100;200;300;400;500;600;700;800;900&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap',
            type: 'text/css',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap',
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

                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,
                // blog: {
                //     showReadingTime: true,
                //     feedOptions: {
                //         type: ['rss', 'atom'],
                //         xslt: true,
                //     },
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     //editUrl:
                //     //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                //     // Useful options to enforce blogging best practices
                //     onInlineTags: 'warn',
                //     onInlineAuthors: 'warn',
                //     onUntruncatedBlogPosts: 'warn',
                // },
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
                // {
                //     type: 'docSidebar',
                //     sidebarId: 'tutorialSidebar',
                //     position: 'left',
                //     label: 'Docs',
                // },
                {
                    type: 'docSidebar',
                    sidebarId: 'dotnetSidebar',
                    position: 'left',
                    label: 'C# .NET',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'aspnetSidebar',
                    position: 'left',
                    label: 'ASP.NET',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'interviewSidebar',
                    position: 'left',
                    label: 'Interview',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'learningSourcesSidebar',
                    position: 'right',
                    label: 'Learning Sources',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'resumeSidebar',
                    position: 'right',
                    label: 'Resume',
                },
                // {
                //     type: 'docSidebar',
                //     sidebarId: 'bookshelfSidebar',
                //     position: 'right',
                //     label: 'Books',
                // },
                // {
                //     type: 'docSidebar',
                //     sidebarId: 'papershelfSidebar',
                //     position: 'right',
                //     label: 'Papershelf',
                // },
                // {
                //     type: 'docSidebar',
                //     sidebarId: 'tddSidebar',
                //     position: 'left',
                //     label: 'TDD',
                // },
                // {
                //     to: '/blog',
                //     label: 'Blog',
                //     position: 'left'
                // }
                //{
                //    href: 'https://www.linkedin.com/in/phougatv/',
                //    label: 'LinkedIn',
                //    position: 'right',
                //},
                //{
                //    href: 'https://github.com/facebook/docusaurus',
                //    label: 'GitHub',
                //    position: 'right',
                //},
                //{
                //    href: 'https://x.com/phougatv',
                //    label: 'X (Twitter)',
                //    position: 'right',
                //}
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

                //========== Multi-column layout ==========
                // {
                //     title: 'Code',
                //     items: [
                //         {
                //             label: 'GitHub',
                //             to: 'https://github.com/phougatv'
                //         },
                //         {
                //             label: 'StackOverflow',
                //             to: 'https://stackoverflow.com/users/3591973/phougatv'
                //         }
                //     ]
                // },
                // {
                //     title: 'Social',
                //     items: [
                //         {
                //             label: 'LinkedIn',
                //             to: 'https://linkedin.com/in/phougatv'
                //         },
                //         {
                //             label: 'X (Twitter)',
                //             to: 'https://x.com/phougatv'
                //         }
                //     ]
                // }
                //{
                //    title: 'More',
                //    items: [
                //        {
                //            label: 'Blog',
                //            to: '/blog',
                //        },
                //        {
                //            label: 'GitHub',
                //            href: 'https://github.com/facebook/docusaurus',
                //        },
                //    ],
                //},
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Evolving Engineer, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.vsLight,
            darkTheme: prismThemes.vsDark,
            additionalLanguages: ['csharp']
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
