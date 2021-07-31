<template>
  <div class="flex flex-col h-full">
    <div class="flex-initial flex flex-row pl-2 bg-gray-200">
      <div>
        Tauri
      </div>
    </div>
    <div class="flex-1 flex flex-col bg-trueGray-700 place-items-center  px-1 py-1">
      <CountdownComponent class="flex-1" />
    </div>
    <div class="flex-initial flex flex-row bg-trueGray-500 py-0 justify-evenly">
      <button class="btn"><img class="image-btn" src="@/assets/clock.svg" /></button>
      <button class="btn"><img class="image-btn" src="@/assets/coffee.svg" /></button>
      <button class="btn"><img class="image-btn" src="@/assets/playpause.svg"></button>
    </div>
  </div>
</template>

<style>
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    CountdownComponent
  }
})

</script>

