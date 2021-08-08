const loadFile : (path: string) => Promise<ArrayBuffer> = path => {
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', path, true)
    xhr.responseType = 'arraybuffer'
    xhr.onload = () => {
      const res = xhr.response as ArrayBuffer
      resolve(res)
    }
    xhr.onerror = e => reject(e)
    xhr.send()
  });
}

const audioContext = new AudioContext()
const FILEPATH = 'notification.mp3'

let audioBuffer : AudioBuffer
loadFile(FILEPATH).then(b => audioContext.decodeAudioData(b)).then(ab => audioBuffer = ab)

const playWorkCompletedSound : () => void = () => {
  // create a new audioBufferSource and start playing
  const audioBufferSource = audioContext.createBufferSource()
  audioBufferSource.buffer = audioBuffer
  audioBufferSource.connect(audioContext.destination)
  audioBufferSource.start()
}

const playBreakCompletedSound = playWorkCompletedSound

export {
  playWorkCompletedSound,
  playBreakCompletedSound,
}