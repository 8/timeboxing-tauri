import { State, state } from './state';
import { watch } from 'vue'
import { playWorkCompletedSound } from './audio';

export type TimerCancellation = () => void

const startTimer : ((state : State) => TimerCancellation) =
  (state: State) => {
    const tick : (() => void) = () => { state.Countdown = state.Countdown.subtract(1, 'second') }
    const handle = setInterval(tick, 1*1000)
    const cancel : TimerCancellation = (() => clearInterval(handle))
    return cancel
  }

let cancellation : TimerCancellation | null = null

export const cancel : () => boolean = () => {
  if (cancellation) {
    cancellation()
    cancellation = null
    return true
  }
  return false
}

export const start : () => void = () => {
  if (!cancellation && state.Countdown.asSeconds() > 0) {
    cancellation = startTimer(state)
  }
}

watch(state, s => {
  if (s.Countdown.asSeconds() === 0) {
    cancel()
    if (state.Type === 'Work') {
      state.Type = null
      state.CompletedWorkTimeboxes = state.CompletedWorkTimeboxes + 1
      playWorkCompletedSound()
    }
  }
})
