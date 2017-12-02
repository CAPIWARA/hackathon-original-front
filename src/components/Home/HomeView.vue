<template>
  <div>
    <task-list />
    <task-form />
  </div>
</template>

<script>
  import TaskList from '../Task/TaskList'
  import TaskForm from '../Task/TaskForm'

  export default {
    components: { TaskList, TaskForm }
  }
</script>
