'use strict';

var Interpolate = require("../src/index");
var math = require('mathjs');

var x = math.matrix([0, 1, 2, 3, 4]);
var y = math.matrix([1, 0.54030223, -0.4161468, -0.9899925, -0.6536436]);
var coefficients = Interpolate.newton(x, y);

var solutions = [1.0, -0.4596977, -0.2483757, 0.1465592, -0.0146568];
for(var i = 0; i < solutions.length; ++i) {
    //math.subset(coefficients, math.index(i)).should.be.approximately(solutions[i], 10e-7);
}
/*
describe('Approximation', function() {

    describe('Interpolation test', function () {

         it('Lagrange', function () {
             var x = math.matrix([0.0, 1.2]);
             var y = math.matrix([1.0, 0.362358]);
             var f = Interpolate.lagrange(x, y);

             x = [0.1, 0.3, 0.5, 0.7, 0.9, 1.1];
             var answers = [0.946863, 0.840589, 0.734316, 0.628042, 0.521768, 0.415495];
             for(var i = 0; i < answers.length; ++i) {
                 f(x[i]).should.be.approximately(answers[i], 10e-6);
             }
         });

         it('Newton', function () {
              var x = math.matrix([0, 1, 2, 3, 4]);
              var y = math.matrix([1, 0.54030223, -0.4161468, -0.9899925, -0.6536436]);
              var coefficients = Interpolate.newton(x, y);
             console.log("XXX");
                console.log(coefficients);
              var solutions = [1.0, -0.4596977, -0.2483757, 0.1465592, -0.0146568];
              for(var i = 0; i < solutions.length; ++i) {
                  math.subset(coefficients, math.index(i)).should.be.approximately(solutions[i], 10e-7);
              }
         });
    });

});*/