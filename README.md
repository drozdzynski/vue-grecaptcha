[![TravisCI](https://travis-ci.org/drozdzynski/vue-grecaptcha.svg?branch=master)](https://travis-ci.org/drozdzynski/vue-grecaptcha)
[![npm version](https://img.shields.io/npm/v/vue-grecaptcha.svg?style=flat)](https://www.npmjs.com/package/vue-grecaptcha)
[![npm downloads](https://img.shields.io/npm/dm/vue-grecaptcha.svg?style=flat)](https://www.npmjs.com/package/vue-grecaptcha)
[![Twitter](https://img.shields.io/twitter/follow/drozdzynskime.svg?style=social&label=Follow)](https://twitter.com/drozdzynskime)
[![VueLIBs](https://img.shields.io/badge/VueLIBS-vue--grecaptcha-C51162.svg)](https://vuelibs.org/libraries/701ba4f3-a1f1-4908-8e93-2f8f93b4e47f)



# vue-grecaptcha

## Description
Google reCAPTCHA for VueJS

## Install

### NPM

```shell
$ npm install vue-grecaptcha
```

### CDN
```html
<script src="https://unpkg.com/vue-grecaptcha@latest/dist/vue-grecaptcha.js"></script>
<!-- Minify -->
<script src="https://unpkg.com/vue-grecaptcha@latest/dist/vue-grecaptcha.min.js"></script>
```

## Usage

### Init
Add this just before closing body to get Google Recaptcha API
```html
<script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaInit&render=explicit" async defer>
</script>
```
```
With `onload` callback, it will call init function.
```

#### Setup sitekey
```javascript
Vue.use(VueGrecaptcha, {
  sitekey: 'your_key'
})
```
or
```html
<vue-grecaptcha sitekey="your_key"></vue-grecaptcha>
```

#### Usage

##### v-model
```html
<vue-grecaptcha v-model="captchaResponse"></vue-grecaptcha>
```

##### callback
```vue
<template>
  <vue-grecaptcha v-bind:callback="callback"></vue-grecaptcha>
</template>
<script>
  export default {
    // ...
    methods: {
      callback: function (response) {
          // Do stuff
      }
    }
  }
</script>
```

### Props:
* sitekey
* callback
* type
* size
* tabindex
* badge
* theme

Informations about props available at <a href="https://developers.google.com/recaptcha/docs/display">reCAPTCHA v2</a> and <a href="https://developers.google.com/recaptcha/docs/invisible">Invisible reCAPTCHA</a>. 

### Methods:

#### reset
```vue
<template>
  <vue-grecaptcha ref="recaptcha"></vue-grecaptcha>
</template>
<script>
  export default {
    // ...
    methods: {
      resetRecaptcha() {
        this.$refs.recaptcha.reset();
      }
    }
  }
</script>
```

## License
```
The MIT License (MIT)

Copyright (c) 2017 Krystian Drożdżyński

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
