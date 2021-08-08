<template>
  <div class="flex flex-row bg-gray-200" data-tauri-drag-region>
    <svg data-tauri-drag-region class="pl-1" width="100%" height="23px" >
      <rect data-tauri-drag-region v-for="i in timeBoxes" :key="i"
        class="fill-current text-trueGray-600"
        width="16" height="16" rx="1" :x="22 * i" y="4"
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
  props: {
    completedTimeboxes: {
      required: true,
      type: Number,
    }
  },
  setup(props) {

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

    return {
      timeBoxes,
      clickClose,
    }
  },
})
</script>
