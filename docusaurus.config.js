// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Octopus',
  tagline: 'Welcome to the Octopus Documentation!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://MIT-Senseable-City-Lab.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/octopus-documentation/', // this changed from docusaurus-octopus

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MIT-Senseable-City-Lab.github.io', // Usually your GitHub org/user name.
  projectName: 'octopus-documentation', // Usually your repo name. // this changed from docusaurus_octopus
  trailingSlash: false,

  onBrokenLinks: 'warn',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove/add this to remove the "edit this page" links.
          //editUrl:
          //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/octopus-social-card.jpeg',
      navbar: {
        logo: {
          alt: 'Senseable City Lab',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/MIT-Senseable-City-Lab/octopus-fabrication',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get started',
                to: '/docs/home',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Website',
                href: 'https://senseable.mit.edu/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/senseable_city_lab/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MIT-Senseable-City-Lab/octopus-fabrication',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MIT Senseable City Lab. Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
