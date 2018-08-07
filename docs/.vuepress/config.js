module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'andreliem/vuepress-netlify-cms',
    sideBar: 'auto',
    activeHeaderLinks: true, // Default: true
    displayAllHeaders: true,
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'Admin', link: '/admin/#/', }
    ]
  }
}
