<template>
  <view-container class="task-view" :is-loading="isLoading">
    <span slot="title">Cadastrar Tarefa</span>

    <form-container class="task-form" @submit="include">
      <form-field
        v-model="title"
        id="title"
        type="text"
        class="field"
        label="Título"
        placeholder="Ex. Arrumar o quarto"
      />
      <form-field
        v-model="description"
        id="description"
        type="textarea"
        class="field"
        label="Descrição"
        placeholder="Ex. Guardar seus brinquedos e dobrar seus lençóis."
      />
      <form-field
        v-model="reward"
        id="reward"
        type="number"
        class="field"
        label="Recompensa"
        placeholder="Ex. 25,50"
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
    </form-container>

    <button
      class="button"
      slot="footer"
      type="button"
      @click="goBack()"
    >Voltar</button>

    <button
      class="button"
      slot="footer"
      type="submit"
      :disabled="!isValid"
    >Adicionar</button>
  </view-container>
</template>

<script>
  import * as types    from '../store/types'
  import FormField     from '../components/Form/FormField'
  import FormContainer from '../components/Form/FormContainer'
  import ViewContainer from '../components/View/ViewContainer'

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
    components: { FormContainer, FormField, ViewContainer },
    data () {
      return {
        title: '',
        description: '',
        reward: null,
        recurrence: '',
        recurrences,
        isLoading: false
      }
    },
    computed: {
      isValid () {
        const validate = (value) => typeof value === 'string' && value.trim() || value
        const isValid = [this.title, this.description, this.reward, this.recurrence].every(validate)
        return isValid
      }
    },
    methods: {
      clean () {
        this.title = ''
        this.description = ''
        this.reward = null
        this.recurrence = null
      },
      async include () {
        const task = {
          title: this.title,
          description: this.description,
          reward: this.reward,
          recurrence: this.recurrence,
          status: 'created'
        }

        this.isLoading = true
        await this.$store.dispatch(types.TASKS_INCLUDE, task)
        this.isLoading = false
        this.clean()
        this.goBack()
      },
      goBack () {
        this.clean()
        this.$router.push('/tasks')
      }
    }
  }
</script>
