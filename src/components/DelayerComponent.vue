<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <ChronometerComponent :time="time"/>
    <button class="button" @click="start" :disabled="timeRunning">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
      <span>play</span>
    </button>
    <button class="button" @click="stop" :disabled="!timeRunning">
            <span class="icon">
              <i class="fa fa-stop"></i>
            </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ChronometerComponent from "@/components/ChronometerComponent.vue";

export default defineComponent({
  name: 'DelayerComponent',
  emits: [
      'timerStop'
  ],
  components: {
    ChronometerComponent
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