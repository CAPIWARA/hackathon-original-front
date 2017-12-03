<template>
  <form-container class="task-view">
    <h1 class="title">
      <span>Tarefas</span>
      <router-link class="button" to="/task">Cadastrar Tarefas</router-link>
    </h1>

    <template v-if="tasks.length">
      <navigation-tabs :tabs="tabs" />
      <task-list :tasks="filtered" />
    </template>

    <section class="spacing" v-else>
      <p>Ainda não há tarefas cadastradas.</p>
      <br />
      <router-link to="/task" class="button">Cadastrar Tarefas</router-link>
    </section>

    <button slot="actions" class="button" type="submit">Confirmar</button>
  </form-container>
</template>

<script>
  import * as types from '../../store/types'
  import FormContainer from '../Form/FormContainer'
  import TaskList from './TaskList'
  import NavigationTabs from '../Navigation/NavigationTabs'
  import { mapGetters } from 'vuex'

  export default {
    components: { FormContainer, TaskList, NavigationTabs },
    data () {
      return {
        tabs: [
          {
            text: 'Todas',
            path: '/tasks',
          },
          {
            text: 'Concluídas',
            path: '/tasks?status=completed',
          },
          {
            text: 'Excluídas',
            path: '/tasks?status=deleted',
          }
        ]
      }
    },
    computed: {
      ...mapGetters({ tasks: types.TASKS }),
      filtered () {
        const tasks = [ ...this.tasks ].filter((task) => {
          const status = this.$route.query.status
          const result = status ? task.status === status : task.status !== 'deleted'
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

<style lang="scss">
  .spacing { padding: 1rem; }

  .task-view .title {
    position: relative;

    & > .button {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
</style>
