module.exports = {
  title: 'CYOA prototype',
  description: 'Choose your destiny',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Art', link: '/art/' },
      { text: 'Work', link: '/work/' },
    ]
  },
  head: [
    ['link', { rel: 'icon', href: `/icons/icon.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/icon.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/icon.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Open+Sans:400|PT+Sans:700` }],
  ],
  serviceWorker: true
}
