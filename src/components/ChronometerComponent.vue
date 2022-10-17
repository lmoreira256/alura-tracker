<template>
  <section>
    <span class="icon">
      <i class="fa-solid fa-stopwatch"></i>
    </span>
    <strong class="display" :style="[fixColor ? { 'color': fixColor } : '']">{{ timer }}</strong>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'ChronometerComponent',
  props: {
    time: {
      type: Number,
      default: 0
    },
    fixColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    timer(): string {
      return new Date(this.time * 1000).toISOString().substring(11, 19)
    }
  },
})
</script>

<style>
.display {
  color: var(--text-primary);
}
</style>