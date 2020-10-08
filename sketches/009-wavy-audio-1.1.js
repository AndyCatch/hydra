// Audio reactive
// Code copied from a preview .jpeg I saw while posting a link to hydra
// The author was not shown at the time, respectfully acknowledged
// mod: AndyCatch

let p5 = new P5();

let TWO_PI = p5.TWO_PI;

osc(10, 0)
  .color(
    0.5,
    () => Math.sin(time * (TWO_PI / 5)) % 360,
    0.8
  )
  .rotate(TWO_PI % 36, 0.01)
  .thresh()
  .modulate(
    osc(10, 0).rotate(TWO_PI).add(o0, 0.1)
  )
  .add(
    osc(20, 0.01, 1)
      .color(
        () => 10 * Math.tan(time / 0.9),
        0.8,
        1
      )
      .thresh()
  )
  .out(o0);
osc(50, 0.1, ({ time }) => Math.sin(time))
  .color(1, 0.7, 0.5)
  .diff(o0)
  .modulate(
    o1,
    () => a.fft[1] * Math.sin(time) * 0.125
  ) // Change this value for extra sensitivity
  .out(o1);
render(o1);

a.show();
