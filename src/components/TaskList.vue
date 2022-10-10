<template>
  <TaskBox>
    <div class="columns">
      <div class="column is-7">
        {{ task.description || 'Tarefa sem descrição' }}
      </div>
      <div class="column">
        <ChronometerComponent :time="task.time"/>
      </div>
    </div>
  </TaskBox>
</template>

<script lang="ts">
import ChronometerComponent from "@/components/ChronometerComponent.vue";
import {PropType} from "vue";
import ITask from "@/interfaces/ITask";
import TaskBox from "@/components/TaskBox.vue";

export default {
  name: 'TaskList',
  components: {
    ChronometerComponent,
    TaskBox
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true
    }
  }
}
</script>