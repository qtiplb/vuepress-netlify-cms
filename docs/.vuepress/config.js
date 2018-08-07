module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'andreliem/vuepress-netlify-cms',
    displayAllHeaders: true
    sidebar: 'auto',
    nav: [
      { text: 'Admin', link: '/admin/#/', }
      { text: 'Numigi', link: 'www.numigi.com', }
    ]
  }
}
