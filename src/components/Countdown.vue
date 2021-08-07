<template>
  <div class="flex flex-row text-6xl place-items-center text-white text" style="gap: 2px">
    <div class="char">
      {{ countdown[0] }}
    </div>
    <div class="char">
      {{ countdown[1] }}
    </div>
    <div class="w-3">
      {{ countdown[2] }}
    </div>
    <div class="char">
      {{ countdown[3] }}
    </div>
    <div class="char">
      {{ countdown[4] }}
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.char {
  @apply  text-center;
}
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
  // setup() {
  // },
})
</script>
