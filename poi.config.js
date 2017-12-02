module.exports = {
  html: {
    title: 'Origininhos',
    description: ''
  },

  webpack (config) {
    config.devtool = '#source-map'
    return config
  }
}
