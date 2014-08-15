var test = require("prova");
var random = require("./");

test('random numbers', function (t) {
  t.plan(100);

  var i = 100;
  while (i--) t.ok(verify(random()));
});

test('random number between given max and min', function (t) {
  t.plan(100);

  var i = 100;
  while (i--) t.ok(verify(random(20, 10), 20, 10));
});

test('min is optional', function (t) {
  t.plan(100);

  var i = 100;
  while (i--) t.ok(verify(random(20), 20));

});

function verify (n, max, min) {
  max || (max = 999999999999);
  min || (min = 0);

  return n <= max && n >= min;
}
