<template>
  <v-text-field
    v-model="innerValue"
    :rounded="rounded"
    :label="lable"
    @keyup.enter="enter"
    class="search-input"
    outlined
    dense
  >
    <v-icon
      slot="append"
      @click="enter"
    >
      mdi-magnify
    </v-icon>
  </v-text-field>
</template>

<script>
export default {
  props: {
    rounded: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    reset: {
      type: Boolean,
      default: false
    },
    lable: {
      type: String,
      default: 'ค้นหา'
    }
  },
  data () {
    return {
      innerValue: this.value
    }
  },
  watch: {
    value (value) {
      this.innerValue = value
    },
    reset (value) {
      this.innerValue = ''
    },
    innerValue (value) {
      this.$emit('input', value)
    }
  },
  methods: {
    enter () {
      this.$emit('enter', this.innerValue)
    }
  }
}
</script>
