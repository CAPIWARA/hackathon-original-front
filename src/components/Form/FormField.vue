<template>
  <fieldset class="form-field">
    <label v-if="label" class="label" :form="id">{{ label }}</label>
    <component
      class="field"
      :is="component"
      :id="id"
      :type="component === 'input' ? type : null"
      :value="value"
      :placeholder="placeholder"
      @input="input"
    >
      <template v-if="component === 'select'">
        <option v-if="placeholder" disabled selected>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option"
          :value="option"
        >{{ option }}</option>
      </template>
    </component>
  </fieldset>
</template>

<script>
  export default {
    props: {
      id: String,
      type: String,
      value: {},
      label: String,
      placeholder: String,
      options: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      component () {
        const types = {
          textarea: 'textarea',
          select: 'select',
          default: 'input'
        }

        const type = types[this.type] || types.default
        return type
      }
    },
    methods: {
      input (event) {
        const value = event.target.value
        console.log(value)
        this.$emit('input', value)
      }
    }
  }
</script>
