// A child is running up a staircase with n steps and can hop either 1 step,
// 2 steps, or 3 steps at a time. Implement a method to count how many possible
// ways the child can run up the stairs.

//inefficient
function countSteps(stepNumber) {
  if (stepNumber < 0) { return 0; }
  if (stepNumber === 0) { return 1; }
  return countSteps(stepNumber - 1) + countSteps(stepNumber - 2) + countSteps(stepNumber - 3);
}

//memoized version
function countSteps(stepNumber) {
  return countStepsWithMemoization(stepNumber, []);
}

function countStepsWithMemoization(stepNumber, arr) {
  if (stepNumber < 0) { return 0; }
  if (stepNumber === 0) { return 1; }
  if (!arr[stepNumber]) {
    arr[stepNumber] = countStepsWithMemoization(stepNumber - 1, arr) + countStepsWithMemoization(stepNumber - 2, arr) + countStepsWithMemoization(stepNumber - 3, arr);
  }
  return arr[stepNumber]
}