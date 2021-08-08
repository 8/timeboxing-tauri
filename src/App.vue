<template>
  <div class="flex flex-col h-full">
    <TitlebarComponent :completedTimeboxes="state.CompletedWorkTimeboxes" v-on:removeTimebox="removeTimebox" />
    <div class="flex-1 flex flex-col bg-trueGray-700 place-items-center">
      <CountdownComponent class="flex-1" :countdown="countdown" />
    </div>
    <ButtonsComponent />
  </div>
</template>

<script lang="ts">
import CountdownComponent from '@/components/Countdown.vue'
import TitlebarComponent from '@/components/Titlebar.vue'
import ButtonsComponent from '@/components/Buttons.vue'
import { computed, defineComponent } from 'vue'
import * as moment from 'moment'
import { state } from './state'

export default defineComponent({
  name: 'App',
  components: {
    CountdownComponent,
    TitlebarComponent,
    ButtonsComponent,
  },
  setup() {

    const countdown = computed(() => moment.utc(state.Countdown.asMilliseconds()).format('mm:ss'))

    const removeTimebox = () => {
      if (state.CompletedWorkTimeboxes > 0) {
        state.CompletedWorkTimeboxes = state.CompletedWorkTimeboxes - 1
      }
    }

    return {
      countdown,
      state,
      removeTimebox,
    }

  }
})

</script>

