<template>
  <main class="task-view">
    <h1>Tarefas</h1>

    <input type="checkbox" v-model="isDeleted" />

    <task-list :tasks="filtered" />

    <hr>

    <h2>Adicionar Tarefas</h2>

    <task-form />
  </main>
</template>

<script>
  import * as types from '../../store/types'
  import TaskForm from './TaskForm'
  import TaskList from './TaskList'
  import { mapGetters } from 'vuex'

  export default {
    components: { TaskForm, TaskList },
    data () {
      return {
        isDeleted: true
      }
    },
    computed: {
      ...mapGetters({ tasks: types.TASKS }),
      filtered () {
        const tasks = [ ...this.tasks ].filter((task) => {
          const isTaskDeleted = task.status === 'deleted'
          const result = (isTaskDeleted && this.isDeleted) || (!isTaskDeleted && !this.isDeleted)
          return result
        })
        return tasks
      }
    },
    mounted () {
      this.$store.dispatch(types.TASKS)
    }
  }
</script>
