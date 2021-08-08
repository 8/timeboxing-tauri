<template>
  <div class="flex flex-col h-full">
    <TitlebarComponent :completedTimeboxes="state.CompletedWorkTimeboxes" />
    <div class="flex-1 flex flex-col bg-trueGray-700 place-items-center">
      <CountdownComponent class="flex-1" :countdown="countdown" />
    </div>
    <ButtonsComponent />
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

    return {
      countdown,
      state,
    }

  }
})

</script>

