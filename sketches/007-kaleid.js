// by Olivia Jack
// https://ojack.github.io
// mod: @AndyCatch

// Headache Warning!

osc(6, 0, 0.8)
  .color(
    () => Math.abs(Math.sin(time) * 1.14),
    0.6,
    () => Math.sin(time) * 0.8
  )
  .rotate(0.92, 0.3)
  .pixelate(20, 10)
  .diff(
    osc(40, 0.03).thresh(0.9).rotate(0, -0.02)
  )
  .luma()
  .invert()
  .modulateRotate(
    osc(20, 0, 10).thresh(0.3, 0.6),
    () => Math.sin(time) * 5
  )
  .invert()
  .kaleid([3, 6, 9, 12])
  .repeat([12,9,6,3])
  .out(o0);
