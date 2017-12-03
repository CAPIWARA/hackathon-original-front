<template>
  <view-container class="children-view" :is-loading="isLoading">
    <span slot="title">Origininhos</span>
    <child-list load-change="update"/>
  </view-container>
</template>

<script>
  import ChildList     from '../components/Child/ChildList'
  import ViewContainer from '../components/View/ViewContainer'

  export default {
    components: { ChildList, ViewContainer },
    data () {
      return {
        isLoading: false
      }
    },
    methods: {
      update (isLoading) {
        this.isLoading = isLoading
      }
    }
  }
</script>
