<template>
  <form-container class="task-form" @submit="include">
    <fieldset class="fields">
      <form-field
        v-model="title"
        id="title"
        type="text"
        class="field"
        label="Título"
      />
      <form-field
        v-model="description"
        id="description"
        type="textarea"
        class="field"
        label="Descrição"
      />
      <form-field
        v-model="reward"
        id="reward"
        type="number"
        class="field"
        label="Recompensa"
      />
      <form-field
        v-model="recurrence"
        id="recurrence"
        type="select"
        class="field"
        label="Recorrência"
        placeholder="Selecione a recorrência"
        :options="recurrences"
      />
    </fieldset>
    <button class="button" slot="actions" type="submit">Adicionar</button>
    <button class="button" slot="actions" type="reset">Limpar</button>
  </form-container>
</template>

<script>
  import * as types from '../../store/types'
  import FormField from '../Form/FormField'
  import FormContainer from '../Form/FormContainer'

  const recurrences = [
    {
      label: 'Nenhuma',
      value: 'none'
    },
    {
      label: 'Diária',
      value: 'daily'
    },
    {
      label: 'Semanal',
      value: 'weekly'
    },
    {
      label: 'Mensal',
      value: 'monthly'
    }
  ]

  export default {
    components: { FormContainer, FormField },
    data () {
      return {
        title: '',
        description: '',
        reward: 0,
        recurrence: '',
        recurrences
      }
    },
    methods: {
      include () {
        const task = {
          title: this.title,
          description: this.description,
          reward: this.reward,
          recurrence: this.recurrence,
          status: 'pending'
        }

        this.$store.dispatch(types.TASKS_INCLUDE, task)
      }
    }
  }
</script>
