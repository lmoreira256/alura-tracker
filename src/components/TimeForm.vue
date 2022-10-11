<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input
            type="text"
            class="input"
            placeholder="Qual tarefa você deseja iniciar"
            v-model="taskDescription"
        />
      </div>
      <div class="column">
        <DelayerComponent @timerStop="stopTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DelayerComponent from "@/components/DelayerComponent.vue";

export default defineComponent({
  name: 'TimeForm',
  emits: [
    'saveTask'
  ],
  components: {
    DelayerComponent
  },
  data() {
    return {
      taskDescription: ''
    }
  },
  methods: {
    stopTask(time: number) {
      this.$emit('saveTask', {
        time: time,
        description: this.taskDescription
      })
      this.taskDescription = ''
    }
  }
});
</script>

<style>
.form {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>