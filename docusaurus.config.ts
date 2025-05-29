import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
    title: 'AI Baby Development UI Kit',
    tagline: 'Beautiful React Native Templates for Baby Development Milestones, Health, and Growth',
    favicon: 'img/favicon.ico',
    url: 'https://kodbex.github.io',
    baseUrl: '/baby-development-ui-kit/',
    organizationName: 'kodbex',
    projectName: 'baby-development-ui-kit',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    trailingSlash: false,
    plugins: [tailwindPlugin],

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: "./src/css/layoutFile.css?1.3",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/social-card.png',
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Guide',
                            to: '/docs/intro',
                        },
                        {
                            label: 'Setup',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Links',
                    items: [
                        {
                            label: 'Screens',
                            href: '/#screens',
                        },
                        {
                            label: 'Components',
                            href: '/#components',
                        },
                        {
                            label: 'Hire US',
                            href: '/#hire-us',
                        },
                    ],
                },
                {
                    title: 'Screens',
                    items: [
                        {
                            label: 'Activities',
                            href: '/#activities',
                        },
                        {
                            label: 'Feeds',
                            href: '/#feeds',
                        },
                        {
                            label: 'Child Management',
                            href: '/#child-management',
                        },
                        {
                            label: 'Onboarding',
                            href: '/#onboarding',
                        },
                        {
                            label: 'UI Component',
                            href: '/#components',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Baby Development UI Kit, Inc. Built with KodBex.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        navbar: {
            // hideOnScroll: false, // Ensures the navbar doesn't hide on scroll
            logo: {
                alt: 'Baby Development UI Kit',
                src: 'img/white_logo.png',
            },
            items: [
                // Centered menu links
                {to: '/docs/intro', label: 'Docs', position: 'left'},
                {to: '/#screens', label: 'Screens', position: 'left'},
                {to: '/#components', label: 'Components', position: 'left'},
                {
                    to: '/#hire-us',
                    label: 'Hire Us',
                    position: 'right',
                    className: 'buy-now-link', // For custom styling
                },
            ],
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        metadata: [
            {
                name: 'keywords',
                content: 'React Native, UI Kit, Baby Development, Mobile App Templates, Milestone Tracker, Expert React Native Developer'
            },
            {name: 'author', content: 'Sulaman Khan'},
            {name: 'robots', content: 'index, follow'},
            {
                name: 'description',
                content: 'React Native UI Kit for baby growth tracking, milestone development, parenting support, and smart health apps.'
            },
            {
                name: 'application/ld+json',
                content: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'SoftwareApplication',
                    name: 'Baby Development App UI Kit',
                    operatingSystem: 'iOS, Android',
                    applicationCategory: 'Developer Tools',
                    "creator": {
                        "@type": "Person",
                        "name": "Sulaman Khan"
                    }
                }),
            },
            {property: 'og:title', content: 'Baby Development React Native UI Kit'},
            {
                property: 'og:description',
                content: 'Launch smarter parenting apps with beautiful, AI-ready UI components.'
            },
            {property: 'og:image', content: 'https://github.io/kodbex/img/social-card.png'},
            {property: 'og:url', content: 'https://github.io/kodbex/img/social-card.png'},
            {name: 'twitter:card', content: 'https://github.io/kodbex/img/social-card.png'},

        ],
        presets: [
            [
                '@docusaurus/preset-classic',
                {
                    sitemap: {
                        changefreq: 'weekly',
                        priority: 0.5,
                    },
                },
            ],
        ],
        // algolia: {
        //     appId: "0CMHNGVUX0",
        //     apiKey: "fb8a8bf7f10a789e5c28ae7be4f70512",
        //     indexName: "test_index",
        // },
    } satisfies Preset.ThemeConfig,
    stylesheets: [
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        {
            href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap',
            type: 'text/css',
        },
    ]
};

export default config;
