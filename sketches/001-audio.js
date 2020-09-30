// initialises the WebCam
s0.initCam()

//  Initialise a rectangle, radius is audio reactive
shape(4, () => a.fft[0] * 1)
// Passes the webcam s0 into a multiply
.mult(src(s0).scale(() => mouse.x/300))
// .repeat()
.out()

// Audio is in an object a
a.show()

a.setSmooth(0.9)

// Sets where the minimum sound is. Moves up blues lines on the "Show" measure.
a.setCutoff(6)