import Q from 'q'

export class Helper {
  constructor () {
    this.defer = Q.defer()
  }
  bind () {
    this.defer.resolve(window.grecaptcha)
  }
  get () {
    return this.defer.promise
  }
}

const helper = new Helper()

if (window !== undefined) {
  window.vueRecaptchaInit = () => helper.bind()
}

export default helper
