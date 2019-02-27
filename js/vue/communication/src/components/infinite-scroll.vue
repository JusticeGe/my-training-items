<template>
  <div>
    <slot name="list"></slot>

    <div class="list-donetip"
         v-show="!isLoading && isDone">
      <slot>没有更多数据了</slot>
    </div>

    <div class="list-loading"
         v-show="isLoading">
      <slot>加载中</slot>
    </div>
  </div>
</template>

<script type="text/babel">

export default {
  data () {
    return {
      isLoading: false,
      isDone: false
    }
  },
  props: {
    onInfinite: {
      type: Function,
      required: true
    },
    distance: {
      type: Number,
      default: 100
    }
  },
  methods: {
    init () {
      this.$on('loadedDone', () => {
        this.isLoading = false
        this.isDone = true
      })

      this.$on('finishLoad', () => {
        this.isLoading = false
      })
    },
    scrollHandler () {
      if (this.isLoading || this.isDone) return
      let baseHeight = this.scrollview === window ? document.body.offsetHeight : this.scrollview.offsetHeight
      let moreHeight = this.scrollview === window ? document.body.scrollHeight : this.scrollview.scrollHeight
      let scrollTop = this.scrollview === window ? document.body.scrollTop : this.scrollview.scrollTop
      if (baseHeight + scrollTop + this.distance > moreHeight) {
        this.isLoading = true
        this.onInfinite()
      }
    }
  },
  mounted () {
    this.scrollview = window
    this.scrollview.addEventListener('scroll', this.scrollHandler, false)
    this.$nextTick(this.init)
  }
}
</script>
