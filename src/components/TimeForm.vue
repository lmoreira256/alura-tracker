<template>
  <div class="box">
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
        <DelayerComponent @timerStop="stopTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DelayerComponent from "@/components/DelayerComponent.vue";

export default defineComponent({
  name: 'TimeForm',
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
      console.log(this.taskDescription)
      console.log(time)
      this.taskDescription = ''
    }
  }
});
</script>