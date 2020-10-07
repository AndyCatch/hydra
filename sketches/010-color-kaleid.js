// Otra textura ilegal
// feedthecrush
// Modded: AndyCatch 10/7

osc(20.292, 0.028, 1.126)
  .diff(osc(36.952, 0.002, 0.623).rotate(299))
    .blend(o0, 0.773)
  .modulateScale(osc(6.573, 0.18), -0.046)
  .scale(
    0.623,
    () => 1.771 + (Math.sin(time)* 200) * Math.abs(Math.sin(0.035))
  )
  .rotate(2).kaleid(3)
  .out(o0);
