<template>
  <view-container class="iot-view">
    <p class="notification">{{ notification }}</p>
    <img
      class="figure"
      src="/cubo.png"
      @click="click"
    />
  </view-container>
</template>

<script>
  import ViewContainer from '../components/View/ViewContainer'
  import { mapActions } from 'vuex'
  import axios from 'axios'

  const SELECTORS = '.header-container, .iot-view > .content > .title'
  const $ = (selectors, h) => [ ...document.querySelectorAll(selectors) ].map(h)

  export default {
    components: { ViewContainer },
    data () {
      return {
        notification: '',
        prevent: false,
        delay: 500,
        clicks: 0,
        timer: null
      }
    },
    methods: {
      async ask () {
        const { data: text } = await axios.get('quantCube/2')
        const { data: url } = await axios.get('textToSpeech/' + text)
        const audio = new Audio()
        audio.src = 'https://cors.io?' + url
        audio.play()
      },
      async answer () {
        await axios.get('quantCube/2')
      },
      click () {
        this.clicks++
        if (this.clicks === 1) {
          this.timer = setTimeout(() => {
            this.clicks = 0
            this.answer()
          }, this.delay)
        } else {
          clearTimeout(this.timer)
          this.clicks = 0
          this.ask()
        }
      }
    },
    beforeDestroy () {
      $(SELECTORS, (element) => element.style.display = null)
    },
    created () {
      $(SELECTORS, (element) => element.style.display = 'none')
    }
  }
</script>

<style lang="scss">
  .iot-view > .content > .figure {
    max-width: 100%;
  }
</style>
