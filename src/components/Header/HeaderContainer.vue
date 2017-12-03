<template>
  <header class="header-container">
    <child-pill
      v-if="child"
      :avatar="child.avatar"
      :name="child.name"
      :account="child.account"
    />
    <header-burguer class="burguer" />
  </header>
</template>

<script>
  import * as types from '../../store/types'
  import { mapGetters } from 'vuex'
  import HeaderBurguer from './HeaderBurguer'
  import ChildPill from '../Child/ChildPill'

  const items = [
    {
      text: 'Tarefas',
      path: '/tasks?status=pending'
    },
    {
      text: 'Origininhos',
      path: '/choose'
    },
    {
      text: 'Home',
      path: '/home'
    }
  ]

  export default {
    components: { HeaderBurguer, ChildPill },
    computed: mapGetters({
      child: types.CHILD
    })
  }
</script>

<style lang="scss">
  .header-container {
    position: absolute;
    top: 0;
    right: 0;
    left:0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 3.75rem;
    background-color: rgba(#000, .6);

    & > .child-pill {
      margin-left: .5rem;

      & > .info > .name { margin-bottom: 0; }
      & > .avatar {
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    & > .burguer {
      margin-left: auto;
    }
  }
</style>
