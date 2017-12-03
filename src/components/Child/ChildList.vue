<template>
  <ul class="child-list">
    <li
      v-for="child in children"
      :class="['item', { '-active': child === selected }]"
      :key="child.id"
      @click="choose(child)"
    >
      <child-pill
        alternative
        :avatar="child.avatar"
        :name="child.name"
        :account="child.account"
      />
    </li>
  </ul>
</template>

<script>
  import ChildPill from './ChildPill'
  import { mapGetters } from 'vuex'
  import * as types from '../../store/types'

  export default {
    components: { ChildPill },
    data () {
      return {
        selected: null,
        isLoading: false
      }
    },
    computed: mapGetters({
      children: types.CHILDREN
    }),
    methods: {
      fetch: types.CHILDREN,
      choose: async function (child) {
        this.isLoading = true
        await this.$store.dispatch(types.CHILD_CHOOSE, child)
        this.$router.push('/home')
        this.isLoading = false
      }
    },
    mounted: async function () {
      this.isLoading = true
      await this.$store.dispatch(types.CHILDREN)
      this.isLoading = false
    }
  }
</script>

<style lang="scss">
  @import '../../style/theme.scss';

  .child-list {
    list-style: none;
    margin: 0;
    padding: 0;

    & > .item {
      padding: 1rem;
      background-color: #fff;
      box-shadow: 0px 8px 5px -3px rgba(0, 0, 0, 0.25);
      transition: background-color .3s ease;
    }

    & > .item:active {
      background-color: $color-primary;
    }

    & > .item + .item { margin-top: 1rem; }
  }
</style>
