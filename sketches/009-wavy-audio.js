osc(10, 0)
  .color(0.5, 0.1, 0.8)
  .rotate(0.11, 0.01)
  .modulate(osc(10, 0).rotate(0.3).add(o0, 0.1))
  .add(osc(20, 0.01, 1).color(0, 0.8, 1))
  .out(o0);
osc(50, 0.1, 0.7)
  .color(1, 0.7, 0.5)
  .diff(o0)
  .modulate(o1, () => a.fft[1] * Math.sin(time) * 5)
  .out(o1);
render(o1);

a.show();
