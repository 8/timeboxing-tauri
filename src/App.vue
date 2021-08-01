<template>
  <div class="flex flex-col h-full">
    <div class="flex-initial flex flex-row pl-2 bg-gray-200">
      <div>
        Tauri
      </div>
    </div>
    <div class="flex-1 flex flex-col bg-trueGray-700 place-items-center  px-1 py-1">
      <CountdownComponent class="flex-1" :countdown="countdown" />
    </div>
    <div class="flex-initial flex flex-row bg-trueGray-500 py-0 justify-evenly">
      <button class="btn" v-on:click="clickClock"><img class="image-btn" src="@/assets/clock.svg" /></button>
      <button class="btn" v-on:click="clickCoffee"><img class="image-btn" src="@/assets/coffee.svg" /></button>
      <button class="btn" v-on:click="clickPlayPause"><img class="image-btn" src="@/assets/playpause.svg"></button>
    </div>
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
import CountdownComponent from '@/components/Countdown.vue'
import { computed, defineComponent, watch } from 'vue'
import { getDefaultBreakDuration, getDefaultWorkDuration, state } from './state'
import { TimerCancellation, startTimer } from './timer'
import * as moment from 'moment'

export default defineComponent({
  name: 'App',
  components: {
    CountdownComponent
  },
  setup() {

    let cancellation : TimerCancellation | null = null

    const cancel = () => {
      if (cancellation) {
        cancellation()
        cancellation = null
        return true
      }
      return false
    }

    const start = () => {
      if (!cancellation) {
        cancellation = startTimer(state)
      }
    }

    const clickClock = () => {
      state.Countdown = getDefaultWorkDuration()
      start()
    }

    const clickCoffee = () => {
      state.Countdown = getDefaultBreakDuration()
      start()
    }

    const clickPlayPause = () => {
      if (!cancel()) {
        start()
      }
    }

    watch(state.Countdown, countdown => {
      if (countdown.asSeconds() === 0) {
        cancel()
      }
    })

    const countdown = computed(() => moment.utc(state.Countdown.asMilliseconds()).format('mm:ss'))

    return {
      clickClock,
      clickCoffee,
      clickPlayPause,
      countdown,
    }

  }
})

</script>

