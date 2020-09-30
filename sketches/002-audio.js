// initialises the WebCam
s0.initCam();

setTimeout(function () {
  src(o0)
    .scrollY(() => a.fft[0] * 0.01)
    .modulate(o0, () => a.fft[2] * 0.01)
    .layer(
      src(s0)
        .repeat(1, 1)
        //         .invert()
        .luma()
//         .kaleid(10)
        .invert()
        .color(1.2, 0.7, -1)
      //         .mult(osc(10, -0.1, 0.8))
    )
    // luma converts light parts of an image into opacity
    //   .luma(0.2)
    .hue(-0.05)
    .out();

  a.setCutoff(4);
  a.show();
}, 250);
