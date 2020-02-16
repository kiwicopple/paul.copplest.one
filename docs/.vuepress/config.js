module.exports = {
  title: 'Paul Copplestone',
  description: 'Techie and entrepreneur',
  dest: 'public',
  plugins: [
    '@vuepress/last-updated',
    ['@vuepress/google-analytics', { ga: 'UA-93673521-3' }],
    ['@vuepress/search', { searchHotkeys: [] }],
  ],
  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://gitcdn.xyz/repo/kiwicopple/assets/master/public/css/circular.css',
  //     },
  //   ],
  // ],
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'Principles', link: '/principles/' },
      { text: 'Knowledge', link: '/knowledge/' },
      { text: 'Gists', link: '/gists/' },
      { text: 'Subscribe', link: 'http://eepurl.com/dE68jj' },
    ],
    sidebar: {
      '/blog/': [
        'do-nothing',
        'agile',
        'design',
        'how-to-learn',
        'nimbus-tech-2019-04',
        'augmented-reality',
        'email-to-a-friend',
        'admirable-startups',
        'dividing-equity',
      ],
      '/gists/': [
        'vscode-snippets',
        'bash-profile',
        'ecto-phoenix',
        'beanstalk-swap',
        'kill-processes',
      ],
      '/principles/': ['life', 'business', 'tech'],
      '/knowledge/': [
        {
          title: 'Agriculture',
          collapsable: false,
          children: ['soil-health', 'soil-nutrients'],
        },
        // {
        //   title: 'Business Practices',
        //   collapsable: false,
        //   children: ['emyth', 'toyota-way'],
        // },
        {
          title: 'Environment',
          collapsable: false,
          children: ['pyrolysis'],
        },
        {
          title: 'Miscellaneous',
          collapsable: false,
          children: ['chess', 'climbing', 'friendship', 'trees', 'mathematics', 'meditation'],
        },
        {
          title: 'People',
          collapsable: false,
          children: ['people/isaac-newton', 'people/marcus-aurelius'],
        },
        {
          title: 'Philosophy',
          collapsable: false,
          children: ['consciousness', 'ethics', 'buddhism', 'stoicism', 'philosophy/desire'],
        },
        {
          title: 'Physics',
          collapsable: false,
          children: ['time'],
        },
        {
          title: 'Sociology',
          collapsable: false,
          children: ['mimetic-theory'],
        },
        {
          title: 'Startups',
          collapsable: false,
          children: ['startups/convertible-notes', 'startups/tech-management'],
        },
        {
          title: 'Tech',
          collapsable: false,
          children: [
            'tech/awesome-list',
            'tech/css',
            'tech/debounce-and-throttle',
            'tech/docker',
            'tech/html-cheatsheet',
            'tech/postgresql',
            'tech/regex',
            'tech/secrets-management-sops',
            'tech/seo',
          ],
        },
        {
          title: 'Zoology',
          collapsable: false,
          children: [
            'zoology/bees',
            'zoology/dolphins',
            'zoology/octopus',
            'zoology/rats',
            'zoology/ravens',
            'zoology/shrimp',
            'zoology/tortoises',
          ],
        },
      ],
    },
    docsRepo: 'https://github.com/kiwicopple/paul.copplest.one/',
    docsDir: 'docs',
    editLinks: true,
  },
}
