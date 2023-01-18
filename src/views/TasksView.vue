<template>
  <TimeForm @saveTask="saveTask" />
  <div class="list">
    <TaskList
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @taskClick="taskClick"
    />
    <TaskBox v-if="emptyList"> Você não está muito produtivo hoje :( </TaskBox>
    <div class="modal" :class="{ 'is-active': selectedTask }" v-if="selectedTask">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editando uma tarefa</p>
          <button
            @click="closeModal"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label for="taskDescription" class="label"> Descrição </label>
            <input
              type="text"
              class="input"
              v-model="selectedTask.description"
              id="taskDescription"
            />
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Salvar</button>
          <button @click="closeModal" class="button">Cancelar</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TimeForm from "@/components/TimeForm.vue";
import TaskList from "@/components/TaskList.vue";
import ITask from "@/interfaces/ITask";
import TaskBox from "@/components/TaskBox.vue";
import { useStore } from "@/store";
import { CREATE_TASK, GET_PROJECTS, GET_TASKS } from "@/store/actions-type";

export default defineComponent({
  name: "TasksView",
  components: {
    TaskBox,
    TimeForm,
    TaskList,
  },
  data() {
    return {
      selectedTask: null as ITask | null,
    };
  },
  computed: {
    emptyList(): boolean {
      return this.tasks.length === 0;
    },
  },
  methods: {
    saveTask(task: ITask) {
      this.store.dispatch(CREATE_TASK, task);
    },
    taskClick(task: ITask) {
      this.selectedTask = task;
    },
    closeModal() {
      this.selectedTask = null;
    },
  },
  setup() {
    const store = useStore();
    store.dispatch(GET_TASKS);
    store.dispatch(GET_PROJECTS);
    return {
      tasks: computed(() => store.state.tasks),
      store,
    };
  },
});
</script>

<style scoped>
.list {
  padding: 1.5rem;
}
</style>
