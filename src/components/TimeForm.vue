<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input
            type="text"
            class="input"
            placeholder="Qual tarefa você deseja iniciar"
            v-model="taskDescription"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="projectId">
            <option value="">Selecione o projeto</option>
            <option
                :value="project.id"
                v-for="project in projects"
                :key="project.id">
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <DelayerComponent @timerStop="stopTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import DelayerComponent from "@/components/DelayerComponent.vue";
import {useStore} from "@/store";

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
      taskDescription: '',
      projectId: ''
    }
  },
  methods: {
    stopTask(time: number) {
      this.$emit('saveTask', {
        time: time,
        description: this.taskDescription,
        projects: this.projects.find(proj => proj.id == this.projectId)
      })
      this.taskDescription = ''
    }
  },
  setup() {
    const store = useStore()

    return {
      projects: computed(() => store.state.projects)
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