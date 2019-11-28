function zero(func = () => 0)     { return func(0); }
function one(func = val => val)   { return func(1); }
function two(func = val => val)   { return func(2); }
function three(func = val => val) { return func(3); }
function four(func = val => val)  { return func(4); }
function five(func = val => val)  { return func(5); }
function six(func = val => val)   { return func(6); }
function seven(func = val => val) { return func(7); }
function eight(func = val => val) { return func(8); }
function nine(func = val => val)  { return func(9); }

function plus(num2=0) {
  return (num1) => (num1 + num2) | 0;
}
function minus(num2 = 0) {
  return (num1) => (num1 - num2) | 0;
}
function times(num2=1) {
  return (num1) => (num1 * num2) | 0;
}
function dividedBy(num2=1) {
  return (num1) => (num1 / num2) | 0;
}