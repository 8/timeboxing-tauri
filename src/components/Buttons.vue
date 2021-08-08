<template>
  <div class="flex-initial flex flex-row bg-trueGray-500 justify-evenly">
    <button class="btn" v-on:click="clickClock"><img class="image-btn" src="@/assets/clock.svg" ></button>
    <button class="btn" v-on:click="clickCoffee"><img class="image-btn" src="@/assets/coffee.svg" ></button>
    <button class="btn" v-on:click="clickPlayPause"><img class="image-btn" src="@/assets/playpause.svg"></button>
  </div>
</template>

<style lang="postcss" scoped>
.btn {
  @apply flex flex-col place-items-center px-1 py-1 hover:bg-trueGray-600 active:bg-trueGray-700 w-8 h-8;
  margin-top: 1px;
  margin-bottom: 1px;
}
.image-btn {
  @apply flex-1;
}
</style>

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

