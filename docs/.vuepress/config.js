module.exports = {
  title: 'Paul Copplestone',
  description: 'Techie and entrepreneur',
  dest: 'public',
  plugins: [
    '@vuepress/last-updated',
    ['@vuepress/google-analytics', { ga: 'UA-93673521-3' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Knowledge', link: '/knowledge/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Gists', link: '/gists/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Subscribe', link: 'http://eepurl.com/dE68jj' },
    ],
    sidebar: {
      '/blog/': [
        'agile',
        'design',
        'how-to-learn',
        'nimbus-tech-2019-04',
        'augmented-reality',
        'email-to-a-friend',
        'admirable-startups',
        'desire',
        'dividing-equity',
      ],
      '/gists/': [
        'secrets-management-sops',
        'vscode-snippets',
        'bash-profile',
        'postgresql',
        'docker',
        'regex',
        'ecto-phoenix',
        'debounce-and-throttle',
        'tech-management',
        'google-analytics',
        'beanstalk-swap',
        'kill-processes',
      ],
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
          children: ['chess', 'friendship', 'meditation'],
        },
        {
          title: 'People',
          collapsable: false,
          children: [
            'people/isaac-newton',
            'people/marcus-aurelius',
          ],
        },
        {
          title: 'Philosophy',
          collapsable: false,
          children: ['consciousness', 'ethics', 'buddhism', 'stoicism'],
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
          title: 'Zoology',
          collapsable: false,
          children: [
            'zoology/octopus',
            'zoology/rats',
            'zoology/ravens',
          ],
        },
      ],
      '/projects/': [
        {
          title: 'Businesses',
          collapsable: false,
          children: ['nimbus-for-work', 'servishero'],
        },
        {
          title: 'Side Projects',
          collapsable: false,
          children: ['quick-font', 'sheetmetal', 'pollygot', 'mentalmodels', 'buymeth', 'driffft', 'braineebox'],
        },
      ],
    },
    docsRepo: 'https://github.com/kiwicopple/paul.copplest.one/',
    docsDir: 'docs',
    editLinks: true,
  },
}
