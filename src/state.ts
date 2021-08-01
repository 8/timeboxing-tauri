import { duration, Duration } from 'moment';
import { reactive } from 'vue';

export type State = {
  Countdown : Duration
}

export const getDefaultWorkDuration : () => Duration = () => duration(25, 'minutes')
export const getDefaultBreakDuration : () => Duration = () => duration(5, 'minutes')

const init : () => State = () => { return { Countdown: getDefaultWorkDuration() }}

export const state = reactive<State>(init())