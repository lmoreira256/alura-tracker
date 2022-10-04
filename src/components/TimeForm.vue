<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar">
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>{{ timer }}</strong>
          </section>
          <button class="button" @click="start">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="stop">
            <span class="icon">
              <i class="fa fa-stop"></i>
            </span>
            <span>stop</span>
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'TimeForm',
  data() {
    return {
      time: 0,
      timerId: 0
    }
  },
  computed: {
    timer(): string {
      return new Date(this.time * 1000).toISOString().substring(11, 19)
    }
  },
  methods: {
    start() {
      this.timerId = setInterval(() => {
        this.time++
      }, 1000)
    },
    stop() {
      clearInterval(this.timerId)
    }
  }
});
</script>

<style scoped>

</style>