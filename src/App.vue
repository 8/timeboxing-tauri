<template>
  <div class="flex flex-col h-full">
    <div class="flex-initial">
      <div class="flex flex-row bg-gray-600">
        <div class=" text-white pl-3 py-2 text-lg font-medium">
          Tauri
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-row">
      <div class="flex-initial px-3 py-3 bg-gray-400 flex flex-col gap-2">
        <button class="tab-item tab-item-active">Home</button>
        <button class="tab-item tab-item-inactive">Test</button>
        <button class="tab-item tab-item-inactive">About</button>
      </div>
      <div class="flex-1 bg-gray-300 px-2 py-1">
        Content
      </div>
    </div>
    
  </div>
</template>

<style>
.tab-item-active {
  @apply bg-blue-700 text-white
}
.tab-item {
  @apply rounded-sm px-2 py-1 w-24 text-left
}
.tab-item-inactive {
  @apply hover:bg-gray-300
}

</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  }
})

</script>

