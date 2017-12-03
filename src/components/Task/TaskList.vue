<template>
  <ul class="task-list">
    <task-item
      v-for="task in tasks"
      class="item"
      :id="task.id"
      :key="task.id"
      :title="task.title"
      :status="task.status"
      @exclude="exclude"
      @complete="complete"
    />
  </ul>
</template>

<script>
  import * as types from '../../store/types'
  import { mapActions } from 'vuex'
  import TaskItem from './TaskItem'

  export default {
    components: { TaskItem },
    props: {
      tasks: Array
    },
    methods: mapActions({
      exclude: types.TASKS_EXCLUDE,
      complete: types.TASKS_COMPLETE
    })
  }
</script>

<style lang="scss">
  .task-list {
    list-style: none;
    margin: 0;
    padding: .5rem 1rem;

    & > .item + .item {
      margin-top: 1rem;
    }
  }
</style>
