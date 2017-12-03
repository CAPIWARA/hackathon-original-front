<template>
  <li :class="['task-item', '-' + status]">
    <span class="checkbox" @click="complete" />
    <h3 class="title" @click="complete">
      <span class="title">{{ title }}</span>
      <span class="reward">{{ reward }}</span>
    </h3>
    <button class="button -exclude" @click="exclude">
      {{ status === 'deleted' ? '⤺' : '✕' }}
    </button>
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
    computed: {
      task () {
        const task = {
          id: this.id,
          title: this.title,
          status: this.status,
          reward: this.reward,
          description: this.description
        }

        return task
      }
    },
    methods: {
      exclude () {
        this.$emit('exclude', this.task)
      },
      complete () {
        this.$emit('complete', this.task)
      }
    }
  }
</script>

<style lang="scss">
  @import '../../style/theme.scss';

  .task-item {
    width: 100%;
    display: flex;
    align-items: baseline;

    & > .title {
      margin: 0;
      max-width: calc(100% - 2rem);
      font-weight: 300;
    }

    & > .button {
      box-sizing: border-box;
      margin-left: auto;
      width: 2rem;
      height: 2rem;
      padding: 0;
      border: 1.5px solid #fff;
      border-radius: 50%;
      background-color: transparent;
      color: #fff;
      font-size: 1rem;
      line-height: calc(2rem - 3px);
    }

    & > .checkbox {
      position: relative;
      box-sizing: border-box;
      display: inline-block;
      flex: 0 0 1rem;
      width: 1rem;
      height: 1rem;
      border: 1px solid #fff;
      margin-right: .5rem;
      transition: background-color .3s ease;
    }

    &.-completed > .checkbox::before {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: .5rem;
      height: .5rem;
      transform: translate(-50%, -50%);
      background-color: #fff;
      content: '';
    }
  }
</style>
