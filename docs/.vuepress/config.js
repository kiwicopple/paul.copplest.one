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
        'nimbus-tech-2019-04',
        'augmented-reality',
        'email-to-a-friend',
        'admirable-startups',
        'desire',
        'dividing-equity',
      ],
      '/gists/': [
        'vscode-snippets',
        'bash-profile',
        'docker',
        'regex',
        'ecto-phoenix',
        'debounce-and-throttle',
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
        {
          title: 'Business Practices',
          collapsable: false,
          children: ['emyth', 'toyota-way'],
        },
        {
          title: 'Buddhism',
          collapsable: false,
          children: ['buddhism-intro', 'buddhism-truths'],
        },
        {
          title: 'Environment',
          collapsable: false,
          children: ['pyrolysis'],
        },
        {
          title: 'Ethics',
          collapsable: false,
          children: ['ethics-intro', 'ethics-maci', 'ethics-why', 'ethics-framework'],
        },
        {
          title: 'Meditation',
          collapsable: false,
          children: ['meditation-obstacles'],
        },
        {
          title: 'Metacognition',
          collapsable: false,
          children: ['how-to-learn'],
        },
        {
          title: 'People',
          collapsable: false,
          children: ['marcus-aurelius'],
        },
        {
          title: 'Physics',
          collapsable: false,
          children: ['time'],
        },
        {
          title: 'Stoicism',
          collapsable: false,
          children: ['stoic-virtues'],
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
