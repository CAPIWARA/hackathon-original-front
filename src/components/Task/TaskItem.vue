<template>
  <li :class="['task-item', '-' + status]">
    <h3 class="title">
      <span class="title">{{ title }}</span>
      <span class="reward">{{ reward }}</span>
    </h3>
    <button class="exclude" @click="exclude">×</button>
  </li>
</template>

<script>
  export default {
    props: {
      id: Number,
      title: String,
      status: String,
      reward: Number,
      description: String
    },
    methods: {
      exclude () {
        this.$emit('exclude', this.id)
      }
    }
  }
</script>
