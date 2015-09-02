# interpolation

Newton and Lagrange interpolating methods. It returns the polynomial of maximum degree given the set of centers. 

var x = math.matrix([0.0, 1.2]);
var y = math.matrix([1.0, 0.362358]);
var f = Interpolate.newton(x, y);
console.log(f(0.5))

var x = math.matrix([0.0, 1.2]);
var y = math.matrix([1.0, 0.362358]);
var f = Interpolate.lagrange(x, y);
console.log(f(0.5))



