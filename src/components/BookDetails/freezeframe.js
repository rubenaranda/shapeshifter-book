import Freezeframe from 'freezeframe'
export const frame = new Freezeframe('freezeframe', {
  // options
  trigger: 'click'
})
frame.start()
console.log(frame)
