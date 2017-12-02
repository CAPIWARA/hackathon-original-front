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
        const task = {
          id: this.id,
          title: this.title,
          status: this.status,
          reward: this.reward,
          description: this.description
        }

        this.$emit('exclude', task)
      }
    }
  }
</script>

<style lang="scss">
  .task-item {
    list-style: none;
  }
</style>
