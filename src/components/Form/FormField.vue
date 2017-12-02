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
          :key="option.value"
          :value="option.value"
        >{{ option.label }}</option>
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
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss">
  .form-field {
    margin: 0;
    padding: 0;
    border: 0 none transparent;

    & > .label { display: block; }

    & > .field {
      box-sizing: border-box;
      display: block;
      width: 100%;
      padding: .5rem;
      border: 2px solid #eaedef;
    }

    & > .field:focus {
      outline: 0 none transparent;
      box-shadow: none;
    }
  }
</style>
