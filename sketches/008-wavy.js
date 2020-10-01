//  Kind of a wave? Moves through the colors
osc(10, 0)
  .color(
    () => Math.sin(time),
    () => Math.sin(time * 2),
    () => Math.sin(time * 4)
  )
//   .pixelate([1,2,3,4,5,6])
  .rotate(-0.100, Math.sin(time%360) * 0.5)
  .modulate(osc([5 * Math.sin(time)], 0))
  .out();
