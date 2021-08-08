<template>
  <div class="flex-initial flex flex-row bg-trueGray-500 justify-evenly py-1">
    <button class="btn" v-on:click="clickClock"><img class="image-btn" src="@/assets/clock.svg" ></button>
    <button class="btn" v-on:click="clickCoffee"><img class="image-btn" src="@/assets/coffee.svg" ></button>
    <button class="btn" v-on:click="clickPlayPause"><img class="image-btn" src="@/assets/playpause.svg"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getDefaultBreakDuration, getDefaultWorkDuration, state } from '../state'
import { cancel, start } from '../timer'

export default defineComponent({
  setup() {

    const clickClock = () => {
      state.Countdown = getDefaultWorkDuration()
      state.Type = 'Work'
      start()
    }

    const clickCoffee = () => {
      state.Countdown = getDefaultBreakDuration()
      state.Type = 'Break'
      start()
    }

    const clickPlayPause = () => {
      if (!cancel()) {
        start()
      }
    }

    return {
      clickClock,
      clickCoffee,
      clickPlayPause,
    }
  },
})
</script>

