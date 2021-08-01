import { State } from "./state";

export type TimerCancellation = () => void

export const startTimer : ((state : State) => TimerCancellation) =
  (state: State) => {
    const tick : (() => void) = () => { state.Countdown = state.Countdown.subtract(1, 'second') }
    const handle = setInterval(tick, 1*1000)
    const cancel : TimerCancellation = (() => clearInterval(handle))
    return cancel
  }