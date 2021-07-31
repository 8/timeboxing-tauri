<template>
  <div class="flex flex-row gap-1 text-6xl place-items-center text-white text">
    <div>
      {{ countdown[0] }}
    </div>
    <div>
      {{ countdown[1] }}
    </div>
    <div >
      {{ countdown[2] }}
    </div>
    <div>
      {{ countdown[3] }}
    </div>
    <div>
      {{ countdown[4] }}
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.text {
  font-family: 'Bahnschrift';
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    countdown: {
      type: String,
      default: '00:00'
    }
  },
  setup() {
    
  },
})
</script>
