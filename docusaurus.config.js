module.exports = {
  title: 'Coastal Data',
  tagline: 'This is a prototype of a collaborative curation service for Coastal Data.',
  url: 'https://copecomet.github.io/Coastal-Data/',
  baseUrl: '/Coastal-Data/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'CoPeCOMET', // Usually your GitHub org/user name.
  projectName: 'Coastal-Data', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Coastal Data',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'About',
          position: 'left',
        },
        {to: 'blog', label: 'Data Blog', position: 'left'},
        {
          href: 'https://github.com/CoPeCOMET',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/ebgoldstein',
            },
          ],
        },
        {
          title: 'Project Code',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/CoPeCOMET',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CoPeCOMET. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'about',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/CoPeCOMET/Coastal-Data',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/CoPeCOMET/Coastal-Data',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
