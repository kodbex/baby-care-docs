import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Baby Care Docs',
    tagline: 'Baby App Development Template | React Native',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://kodbex.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/baby-care-docs/',
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'kodbex', // Usually your GitHub org/user name.
    projectName: 'baby-care-docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    trailingSlash: false,
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    // i18n: {
    //     defaultLocale: 'en',
    //     locales: ['en'],
    // },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],
    staticDirectories: ['static'],
    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'X',
                            href: 'https://x.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        metadata: [
            {
                name: 'application/ld+json',
                content: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'SoftwareApplication',
                    name: 'Baby Development App UI Kit',
                    operatingSystem: 'iOS, Android',
                    applicationCategory: 'Developer Tools',
                }),
            },
        ],
        navbar: {
            hideOnScroll: true, // Ensures the navbar doesn't hide on scroll
            logo: {
                alt: 'Baby Development UI Kit',
                src: 'img/white_logo.png',
            },
            items: [
                // Centered menu links
                {to: '/docs/intro', label: 'Docs', position: 'left'},
                // {to: '/features', label: 'Features', position: 'left'},
                // {to: '/pricing', label: 'Pricing', position: 'left'},
                // {to: '/support', label: 'Support', position: 'left'},
                // Right-side link
                // {
                //     to: '/buy',
                //     label: 'Buy Now',
                //     position: 'right',
                //     className: 'buy-now-link', // For custom styling
                // },
            ],
        }
    } satisfies Preset.ThemeConfig,
    stylesheets: [
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        {
            href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap',
            type: 'text/css',
        },
    ],
    scripts: [
        {
            src: 'https://cdn.tailwindcss.com',
            async: true,
        },
    ],

};

export default config;
