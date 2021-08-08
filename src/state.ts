import { duration, Duration } from 'moment';
import { reactive } from 'vue';

export type CountdownType = 'Work' | 'Break' | null

export type State = {
  Countdown : Duration,
  Type : CountdownType,
  CompletedWorkTimeboxes : number
}

const devMode = false

export const getDefaultWorkDuration : () => Duration = () => devMode ? duration(5, 'seconds') : duration(25, 'minutes')
export const getDefaultBreakDuration : () => Duration = () => devMode ? duration(3, 'seconds') : duration(5, 'minutes')

const init : () => State = () => { 
  return {
    Countdown: getDefaultWorkDuration(),
    Type: null,
    CompletedWorkTimeboxes: 0,
  }
}

export const state = reactive<State>(init())