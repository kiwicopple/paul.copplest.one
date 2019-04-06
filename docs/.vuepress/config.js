module.exports = {
  title: "Paul Copplestone",
  description: "Techie and entrepreneur",
  dest: "public",
  plugins: [
    "@vuepress/last-updated",
    ["@vuepress/google-analytics", { ga: "" }]
  ],
  themeConfig: {
    nav: [
      { text: "Knowledge", link: "/knowledge/" },
      { text: "Blog", link: "/blog/" },
      { text: "Gists", link: "/gists/" },
      { text: "Projects", link: "/projects/" }
    ],
    sidebar: {
      "/blog/": ["email-to-a-friend"],
      "/gists/": ["vscode-js-snippets"],
      "/knowledge/": ["soil"],
      "/projects/": [
        {
          title: "Businesses",
          collapsable: false,
          children: ["nimbus-for-work", "servishero"]
        },
        {
          title: "Side Projects",
          collapsable: false,
          children: ["nimbus-for-work", "servishero"]
        }
      ]
    },
    repo: "https://github.com/kiwicopple/paul.copplest.one",
    editLinks: true
  }
};
