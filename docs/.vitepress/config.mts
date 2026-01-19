import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'Paul Copplestone',
    description: 'Techie and entrepreneur',
    outDir: '../public',

    themeConfig: {
      nav: [
        { text: 'Blog', link: '/blog/' },
        { text: 'Knowledge', link: '/knowledge/' },
        { text: 'Subscribe', link: 'http://eepurl.com/dE68jj' },
        { text: 'Twitter', link: 'https://twitter.com/kiwicopple' }
      ],

      sidebar: {
        '/blog/': [
          {
            text: 'Blog Posts',
            items: [
              { text: 'Human Memories', link: '/blog/human-memories' },
              { text: 'VR Theory of the World', link: '/blog/vr-theory-of-the-world' },
              { text: 'How DevTools Die', link: '/blog/how-devtools-die' },
              { text: 'Friction Logs', link: '/blog/friction-logs' },
              { text: 'Why Open Source', link: '/blog/why-open-source' },
              { text: 'Profit Sharing', link: '/blog/profit-sharing' },
              { text: 'Realtime User Store', link: '/blog/realtime-user-store' },
              { text: 'Agile', link: '/blog/agile' },
              { text: 'Design', link: '/blog/design' },
              { text: 'How to Learn', link: '/blog/how-to-learn' },
              { text: 'Nimbus Tech 2019-04', link: '/blog/nimbus-tech-2019-04' },
              { text: 'Augmented Reality', link: '/blog/augmented-reality' },
              { text: 'Email to a Friend', link: '/blog/email-to-a-friend' },
              { text: 'Dividing Equity', link: '/blog/dividing-equity' }
            ]
          }
        ],
        '/knowledge/': [
          {
            text: 'Miscellaneous',
            collapsed: false,
            items: [
              { text: 'Chess', link: '/knowledge/chess' },
              { text: 'Climbing', link: '/knowledge/climbing' },
              { text: 'Consciousness', link: '/knowledge/consciousness' },
              { text: 'Languages', link: '/knowledge/languages' },
              { text: 'Mathematics', link: '/knowledge/mathematics' },
              { text: 'Meditation', link: '/knowledge/meditation' },
              { text: 'Mimetic Theory', link: '/knowledge/mimetic-theory' },
              { text: 'Music', link: '/knowledge/music' },
              { text: 'Physics', link: '/knowledge/physics' },
              { text: 'Public Speaking', link: '/knowledge/public-speaking' },
              { text: 'Pyrolysis', link: '/knowledge/pyrolysis' },
              { text: 'Relationships', link: '/knowledge/relationships' },
              { text: 'Soil', link: '/knowledge/soil' },
              { text: 'Space', link: '/knowledge/space' },
              { text: 'Trees', link: '/knowledge/trees' },
              { text: 'Writing', link: '/knowledge/writing' },
              { text: 'Zoology', link: '/knowledge/zoology' }
            ]
          },
          {
            text: 'Tech',
            collapsed: false,
            items: [
              { text: 'Awesome List', link: '/knowledge/tech/awesome-list' },
              { text: 'Bash Profile', link: '/knowledge/tech/bash-profile' },
              { text: 'Docker', link: '/knowledge/tech/docker' },
              { text: 'HTML Cheatsheet', link: '/knowledge/tech/html-cheatsheet' },
              { text: 'macOS Tips', link: '/knowledge/tech/macos-tips' },
              { text: 'Mental Models', link: '/knowledge/tech/mental-models' },
              { text: 'PostgreSQL', link: '/knowledge/tech/postgresql' },
              { text: 'Postgres Data', link: '/knowledge/tech/postgres-data' },
              { text: 'Regex', link: '/knowledge/tech/regex' },
              { text: 'Secrets Management (SOPS)', link: '/knowledge/tech/secrets-management-sops' },
              { text: 'SEO', link: '/knowledge/tech/seo' },
              { text: 'Today I Learned', link: '/knowledge/tech/today-i-learned' },
              { text: 'VS Code Snippets', link: '/knowledge/tech/vscode-snippets' }
            ]
          },
          {
            text: 'Business',
            collapsed: false,
            items: [
              { text: 'Hiring', link: '/knowledge/business/hiring' },
              { text: 'Management', link: '/knowledge/business/management' },
              { text: 'Sales', link: '/knowledge/business/sales' },
              { text: 'Marketing', link: '/knowledge/business/marketing' },
              { text: 'Fundraising', link: '/knowledge/business/fundraising' },
              { text: 'Resources', link: '/knowledge/business/resources' }
            ]
          },
          {
            text: 'Levels',
            collapsed: false,
            items: [
              { text: 'Business', link: '/knowledge/levels/business' },
              { text: 'Life', link: '/knowledge/levels/life' },
              { text: 'Leadership', link: '/knowledge/levels/leadership' },
              { text: 'Learning', link: '/knowledge/levels/learning' }
            ]
          },
          {
            text: 'Philosophy',
            collapsed: false,
            items: [
              { text: 'Ethics', link: '/knowledge/philosophy/ethics' },
              { text: 'Buddhism', link: '/knowledge/philosophy/buddhism' },
              { text: 'Stoicism', link: '/knowledge/philosophy/stoicism' },
              { text: 'Desire', link: '/knowledge/philosophy/desire' }
            ]
          },
          {
            text: 'People',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/knowledge/people' },
              { text: 'Lee Kuan Yew', link: '/knowledge/people/lee-kuan-yew' },
              { text: 'Jensen Huang', link: '/knowledge/people/jensen-huang' },
              { text: 'Elon Musk', link: '/knowledge/people/elon-musk' },
              { text: 'Marlon Brando', link: '/knowledge/people/marlon-brando' },
              { text: 'Nelson Mandela', link: '/knowledge/people/nelson-mandela' }
            ]
          }
        ]
      },

      editLink: {
        pattern: 'https://github.com/kiwicopple/paul.copplest.one/edit/main/docs/:path'
      },

      search: {
        provider: 'local'
      },

      socialLinks: [
        { icon: 'twitter', link: 'https://twitter.com/kiwicopple' },
        { icon: 'github', link: 'https://github.com/kiwicopple' }
      ]
    }
  })
)
