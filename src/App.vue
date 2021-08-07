<template>
  <div class="flex flex-col h-full">
    <div class="flex-initial flex flex-row bg-gray-200">
      <CompletedTimeboxes class="flex-1" :completedTimeboxes="state.CompletedWorkTimeboxes" />
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
import CompletedTimeboxes from '@/components/CompletedTimeboxes.vue'
import { computed, defineComponent } from 'vue'
import { getDefaultBreakDuration, getDefaultWorkDuration, state } from './state'
import { start, cancel } from './timer'
import * as moment from 'moment'

export default defineComponent({
  name: 'App',
  components: {
    CountdownComponent,
    CompletedTimeboxes,
  },
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

    const countdown = computed(() => moment.utc(state.Countdown.asMilliseconds()).format('mm:ss'))

    return {
      clickClock,
      clickCoffee,
      clickPlayPause,
      countdown,
      state,
    }

  }
})

</script>

