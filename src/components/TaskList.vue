<template>
  <TaskBox>
    <div class="columns clickable" @click="taskClick">
      <div class="column is-4">
        {{ task.description || "Tarefa sem descrição" }}
      </div>
      <div class="column is-3">
        {{ task.project?.name || "N/D" }}
      </div>
      <div class="column">
        <ChronometerComponent :time="task.time" :fixColor="'#363636'" />
      </div>
    </div>
  </TaskBox>
</template>

<script lang="ts">
import ChronometerComponent from "@/components/ChronometerComponent.vue";
import { defineComponent, PropType } from "vue";
import ITask from "@/interfaces/ITask";
import TaskBox from "@/components/TaskBox.vue";

export default defineComponent({
  name: "TaskList",
  emits: ["taskClick"],
  components: {
    ChronometerComponent,
    TaskBox,
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
  methods: {
    taskClick(): void {
      this.$emit("taskClick", this.task);
    },
  },
});
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>