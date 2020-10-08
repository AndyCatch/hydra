//  AndyCatch
//  :)

osc(10, 0)
  .color(
    () => Math.sin(time * 0.5),
    () => Math.sin(time * 0.75),
    () => Math.sin(time * 1.01)
  )
  .rotate(-0.1, 0.8)
  .colorama()
  .mult(osc(100, 0.5))
  .luma()
  .modulate(osc(5 * Math.sin(time), 0))
  .out();
