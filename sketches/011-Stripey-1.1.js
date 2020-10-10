//@ferdoropeza
// Modded: AndyCatch 10/7 x 2

var rep = 25
var A = window.innerHeight / window.innerWidth

osc(3, 0.1)
  .repeat(() => Math.tan(rep)) // Added function call
  .mult(osc(8, 0.25, 100))
  .scale(
    () => A / Math.sin(time % 360),
    () => A / Math.tan(time % 360),
    1
  ) // Added Sine func
  .mask(shape(2).layer(src(o0)))
  .modulateScale(osc(2), 1.1, 0.8)
  .color(() => Math.sin(time % 255), 0.5, 0.5, 1)
  .repeatX(3)
  .repeatY(2)
  .kaleid(3)
  .modulateScrollY(osc(2, 1.1, 0.8))
  .out(o0)
