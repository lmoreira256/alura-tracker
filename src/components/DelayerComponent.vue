<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <ChronometerComponent :time="time"/>

    <ActionButton description="play" icon="fa-play" :disabled="timeRunning" @click="start" />
    <ActionButton description="stop" icon="fa-stop" :disabled="!timeRunning" @click="stop" />

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ChronometerComponent from "@/components/ChronometerComponent.vue";
import ActionButton from "@/components/ActionButton.vue";

export default defineComponent({
  name: 'DelayerComponent',
  emits: [
      'timerStop'
  ],
  components: {
    ChronometerComponent,
    ActionButton
  },
  data() {
    return {
      time: 0,
      timerId: 0,
      timeRunning: false
    }
  },
  methods: {
    start() {
      this.timeRunning = true
      this.timerId = setInterval(() => {
        this.time++
      }, 1000)
    },
    stop() {
      this.timeRunning = false
      clearInterval(this.timerId)
      this.$emit('timerStop', this.time)
      this.time = 0
    }
  }
})
</script>