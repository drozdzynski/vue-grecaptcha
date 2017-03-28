const plugin = require('./main.js')

plugin.version = process.env.__VERSION__

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.VueGrecaptcha = plugin
}
