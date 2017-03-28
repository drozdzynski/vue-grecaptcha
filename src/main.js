import helper from './helper'

const install = (Vue, options = {}) => {
  Vue.component('vue-grecaptcha', {
    props: ['sitekey', 'callback', 'type', 'size', 'tabindex', 'badge', 'theme'],
    render: function (createElement) {
      return createElement(
        'div',
        this.$slots.default
      )
    },
    data () {
      return {
        widgetId: null
      }
    },
    mounted () {
      if (this.sitekey === undefined && options.sitekey === undefined) {
        console.error('[vue-grecaptcha] Sitekey is not defined')
        return false
      }
      helper.get().then(this.init)
    },
    methods: {
      init (grecaptcha) {
        if ((this.sitekey !== undefined || options.sitekey !== undefined) && grecaptcha !== undefined) {
          const recaptchaOptions = {
            sitekey: this.sitekey || options.sitekey,
            theme: this.theme || 'light',
            callback: this.done
          }

          if (this.type !== undefined) recaptchaOptions['type'] = this.type
          if (this.size !== undefined) recaptchaOptions['size'] = this.size
          if (this.tabindex !== undefined) recaptchaOptions['tabindex'] = this.tabindex
          if (this.badge !== undefined) recaptchaOptions['badge'] = this.badge

          this.widgetId = grecaptcha.render(this.$el, recaptchaOptions)
        }
      },
      done (response) {
        if (typeof this.callback === 'function') {
          this.callback(response)
        }

        this.$emit('input', response)
      },
      reset () {
        if (window.grecaptcha !== undefined && this.widgetId != null) {
          window.grecaptcha.reset(this.widgetId)
          this.$emit('input', '')
        }
      }
    }
  })
}

export { install }
