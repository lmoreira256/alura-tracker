<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <TimeForm @saveTask="saveTask" />
      <div class="list">
        <TaskList v-for="(task, index) in tasks" :key="index" :task="task" />
        <TaskBox v-if="emptyList">
          Você não está muito produtivo hoje :(
        </TaskBox>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from "@/components/SideBar.vue";
import TimeForm from "@/components/TimeForm.vue";
import TaskList from "@/components/TaskList.vue";
import ITask from "@/interfaces/ITask";
import TaskBox from "@/components/TaskBox.vue";

export default defineComponent({
  name: 'App',
  components: {
    TaskBox,
    SideBar,
    TimeForm,
    TaskList
  },
  data() {
    return {
      tasks: [] as ITask[]
    }
  },
  computed: {
    emptyList(): boolean {
      return this.tasks.length === 0
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task)
    }
  }
});
</script>

<style>
.list {
  padding: 1.25rem;
}
</style>
