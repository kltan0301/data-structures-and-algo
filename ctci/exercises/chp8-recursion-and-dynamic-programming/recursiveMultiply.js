// Write a recursive function to multiply 2 numbers without using the * operator.
// You can use addition, subtraction, and bit shifting, but you should minimize the number of
// those operations

function multiply(number, multiplier) {
  if (multiplier === 1) { return number; }
  return number + multiply(number, multiplier - 1);
}