// Original by Rishi https://twitter.com/hydra_patterns/status/1319412151514255362
// Mod: @AndyCatch

osc(2, 0.1, 0.2)
  .rotate(Math.PI / 4)
  .contrast(1.2)
  .blend(o0)
  .blend(o0)
  .blend(o0, 0.3)
  .colorama(() => Math.sin(time / 2) * 0.01)
  .modulateScale(
    osc(4)
      .modulateScale(shape(32, 0.3, 0.4).modulate(noise(2)), 2)
      .rotate(0, 0.06),
    -1
  )
  .scale(1.1)
  .rotate(-0.02)
  .modulateScale(
    shape(4, 0.3, 0)
      .rotate(Math.PI / 4)
      .scale(2.2, 0.32),
    -2
  )
  .out()
