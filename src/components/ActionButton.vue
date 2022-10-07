<template>
  <button class="button" @click="click" :disabled="disabled">
            <span class="icon">
              <i class="fas" :class="icon"></i>
            </span>
    <span>{{ description }}</span>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'ActionButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  emits: [
    'click'
  ],
  methods: {
    click() {
      this.$emit('click')
    }
  }
})
</script>