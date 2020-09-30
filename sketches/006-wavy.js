// Wavy

osc(10, 0.9, 10)
  .color(0.9, ({time})=>Math.sin(time), 0.8)
  .mult(
    osc(45, 0.3, 10)
      .color(0.9, 0.9, 0.9)
      .rotate(() =>
        Math.abs(Math.sin(time % 360))
      )
      .kaleid([1, 2, 3].fast(0.125))
  )
  .scrollX(1)
  .colorama()
  .luma()
  .invert()
  .repeatX(2)
  .repeatY(2)
  .modulate(osc(1, -0.9, 300).mult(osc(45, 0.3, 300).luma()))
  .out();
