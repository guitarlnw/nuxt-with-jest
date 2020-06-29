<template>
  <div>
    <v-select
      v-model="innerValue"
      :items="items"
      name="select-input"
      label="Standard"
    />
    <p class="text-selected">
      Selected is : {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      innerValue: this.value
    }
  },
  computed: {
    name () {
      const option = this.items.find(el => el.value === this.innerValue)
      if (option) {
        return option.text
      }
      return ''
    }
  },
  watch: {
    value (val) {
      this.innerValue = val
    },
    innerValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>
