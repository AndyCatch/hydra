//@ferdoropeza
// Modded: AndyCatch 10/7
 
var rep = 5;
var A = window.innerHeight/window.innerWidth;

osc(3,0.1)
.repeat(()=>Math.tan(rep)) // Added function call
.diff(osc(8))
.scale(2,()=> A / Math.sin(time % 360),1) // Added Sine func
.mask(shape(2).layer(src(o0)))
.modulateScale(osc(2),1.1,0.8)
.color(0.95,0.95,0.19)
.out()
