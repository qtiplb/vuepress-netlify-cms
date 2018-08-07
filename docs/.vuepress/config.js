module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'andreliem/vuepress-netlify-cms',
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ]
      }
    ]
    sideBar: 'auto',
    activeHeaderLinks: true, // Default: true
    displayAllHeaders: true,
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'Admin', link: '/admin/#/', }
    ]
  }
}
