<template>
  <view-container class="tasks-view" :is-loading="isLoading">
    <span slot="title">Tarefas</span>
    <router-link
      to="/task"
      slot="title"
      class="button"
    >Cadastrar Tarefas</router-link>

    <template v-if="tasks.length">
      <navigation-tabs :tabs="tabs" />
      <task-list :tasks="filtered" />
    </template>

    <section class="spacing" v-else>
      <p>Ainda não há tarefas cadastradas.</p>
      <br />
      <router-link to="/task" class="button">Cadastrar Tarefas</router-link>
    </section>

    <button
      slot="footer"
      class="button"
      @click="update"
    >Confirmar</button>
  </view-container>
</template>

<script>
  import * as types     from '../store/types'
  import { mapGetters } from 'vuex'
  import ViewContainer  from '../components/View/ViewContainer'
  import TaskList       from '../components/Task/TaskList'
  import NavigationTabs from '../components/Navigation/NavigationTabs'

  export default {
    components: { ViewContainer, TaskList, NavigationTabs },
    data () {
      return {
        isLoading: false,
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
    methods: {
      async update () {
        this.isLoading = true
        await this.$store.dispatch(types.TASKS_UPDATE)
        this.isLoading = false
      }
    },
    async mounted () {
      this.isLoading = true
      await this.$store.dispatch(types.TASKS)
      this.isLoading = false
    }
  }
</script>

<style lang="scss">
  .spacing { padding: 1rem; }

  .tasks-view .title {
    position: relative;

    & > .button {
      position: absolute;
      top: -.25rem;
      right: 0;
    }
  }
</style>
