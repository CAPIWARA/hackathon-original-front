<template>
  <ul class="task-list">
    <task-item
      v-for="task in tasks"
      :id="task.id"
      :key="task.id"
      :title="task.title"
      :status="task.status"
      @exclude="exclude"
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
      exclude: types.TASKS_EXCLUDE
    })
  }
</script>

<style>
  .task-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
