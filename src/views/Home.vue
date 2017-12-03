<template>
  <view-container class="home-view">
    <span slot="title">Sobre o Originho</span>

    <child-pill
      :avatar="child.avatar"
      :name="child.name"
      :account="child.account"
    />

    <h5 class="balance">{{ child.balance }} <small>cubinhos</small></h5>

    <hr>

    <section class="tasks">
      <task-list v-if="tasks.length" :tasks="tasks" />

      <p v-if="!tasks.length">Nenhuma tarefa cadastrada. Cadastre agora!</p>

      <router-link
        class="button"
        to="/tasks"
      >Gerenciar Tarefas</router-link>
    </section>

    <hr>

    <section class="wishes">
      <h4 class="title">Whishes</h4>

      <ul class="wish-list">
        <li class="item" v-for="wish in wishs">
          <span class="name">{{ wish.name }}</span>
          <span class="value">{{ wish.value | toCurrency }}</span>
        </li>
      </ul>
    </section>
  </view-container>
</template>

<script>
  import * as types from '../store/types'
  import { mapGetters } from 'vuex'
  import ViewContainer from '../components/View/ViewContainer'
  import ChildPill from '../components/Child/ChildPill'
  import TaskList from '../components/Task/TaskList'

  export default {
    components: { ViewContainer, ChildPill, TaskList },
    computed: mapGetters({
      child: types.CHILD,
      wishs: types.WISHS,
      tasks: types.TASKS
    }),
    data () {
      return { isLoading: true }
    },
    mounted: async function () {
      this.isLoading = true
      await this.$store.dispatch(types.WISHS)
      await this.$store.dispatch(types.TASKS)
      this.isLoading = false
    }
  }
</script>

<style lang="scss">
  .wish-list {
    list-style: none;
    margin: 0;
    padding: 0;

    & > .item {
      position: relative;
      padding-left: 1rem;
    }

    & > .item::before {
      position: absolute;
      top: 50%;
      left: 0;
      line-height: 1;
      font-size: 2rem;
      transform: translateY(-50%);
      content: '•';
    }

    & > .item + .item { margin-top: 1rem; }

    & > .item > .name,
    & > .item > .value { display: inline-block; }

    & > .item > .name { width: 120px; }

    & > .item > .value {
      width: 60px;
      text-align: right;
    }
  }

  .wishes {
    & > .title {
      position: relative;
      margin: 0 0 1rem;
      font-size: 2rem;
      font-weight: 300;
    }

    & > .title::after {
      content: '';
    }
  }

  .home-view > .content {
    & > .balance {
      font-size: 2rem;
      margin: 1rem;
      line-height: 1;
      text-align: right;
    }

    & > .tasks {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > * { margin-bottom: 1rem; }
    }

    & > .wishes {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
