module.exports = {
  title: "Paul Copplestone",
  description: "Techie and entrepreneur",
  dest: "public",
  plugins: [
    "@vuepress/last-updated",
    ["@vuepress/google-analytics", { ga: "UA-93673521-3" }]
  ],
  themeConfig: {
    nav: [
      { text: "Knowledge", link: "/knowledge/" },
      { text: "Blog", link: "/blog/" },
      { text: "Gists", link: "/gists/" },
      { text: "Projects", link: "/projects/" }
    ],
    sidebar: {
      "/blog/": [
        {
          title: "Posts",
          collapsable: false,
          children: [
            "desire",
            "dividing-equity",
            "augmented-reality",
            "admirable-startups",
            "email-to-a-friend"
          ]
        },
        {
          title: "In Progress",
          collapsable: false,
          children: [
            "types-of-intelligence",
            "effectiveness",
            "team-communication",
            "product-distribution-fit",
            "personal-core-values",
            "investor-optimisation",
          ]
        }
      ],
      "/gists/": [
        "vscode-js-snippets",
        "docker",
        "regex",
        "debounce-and-throttle",
        "google-analytics",
        "beanstalk-swap",
        "kill-processes",
      ],
      "/knowledge/": [
        {
          title: "Agronomy",
          collapsable: false,
          children: ["soil"]
        },
        {
          title: "Buddhism",
          collapsable: false,
          children: ["buddhism-intro", "buddhism-truths"]
        },
        {
          title: "Meditation",
          collapsable: false,
          children: ["meditation-obstacles"]
        },
        {
          title: "Stoicism",
          collapsable: false,
          children: ["stoic-virtues"]
        },
        {
          title: "Waste",
          collapsable: false,
          children: ["pyrolysis"]
        }
      ],
      "/projects/": [
        {
          title: "Businesses",
          collapsable: false,
          children: ["nimbus-for-work", "servishero"]
        },
        {
          title: "Side Projects",
          collapsable: false,
          children: [
            "sheetmetal",
            "pollygot",
            "mentalmodels",
            "buymeth",
            "driffft",
            "braineebox"
          ]
        }
      ]
    },
    docsRepo: "https://github.com/kiwicopple/paul.copplest.one/",
    docsDir: 'docs',
    editLinks: true
  }
};
