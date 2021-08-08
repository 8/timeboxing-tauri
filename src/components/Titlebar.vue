<template>
  <div class="flex flex-row bg-gray-200" data-tauri-drag-region>
    <svg data-tauri-drag-region class="pl-1" width="100%" height="23px" >
      <rect v-for="i in timeBoxes" :key="i"
        class="fill-current text-trueGray-600"
        width="14" height="14" rx="1" :x="18 * i" y="5"
        v-on:contextmenu="rightClickRect"
        />
    </svg>

    <button class="px-2 bg-gray-200 text-trueGray-700 font-light"
      v-on:click="clickClose">
      X
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { appWindow  } from '@tauri-apps/api/window'

export default defineComponent({
  emits: [
    'removeTimebox'
  ],
  props: {
    completedTimeboxes: {
      required: true,
      type: Number,
    }
  },
  setup(props, ctx) {

    const timeBoxes = computed(() => {
      let timeBoxes : Array<number> = []
      for (let i = 0; i < props.completedTimeboxes; i++) {
        timeBoxes.push(i)
      }
      return timeBoxes
    })

    const clickClose = () => {
      appWindow.close()
    }
    
    const rightClickRect = (ev: MouseEvent) => {
      ev.preventDefault()
      if (ev?.button === 2) {
        ctx.emit('removeTimebox')
      }
    }

    return {
      timeBoxes,
      clickClose,
      rightClickRect,
    }
  },
})
</script>
