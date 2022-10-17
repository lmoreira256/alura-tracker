<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeActive }">
    <div class="column is-one-quarter">
      <SideBar @alterTheme="alterTheme" />
    </div>
    <div class="column is-three-quarter content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from "@/components/SideBar.vue";

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
  },
  data() {
    return {
      darkModeActive: false
    }
  },
  methods: {
    alterTheme(darkModeActive: boolean) {
      this.darkModeActive = darkModeActive
    }
  }
});
</script>

<style>
main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-mode {
  --bg-primary: #2B2D42;
  --text-primary: #ddd;
}
.content {
  background-color: var(--bg-primary);
}
</style>
