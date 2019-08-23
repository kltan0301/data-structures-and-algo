// Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
// The robot can only move in two directions, right and down, butcertain cells are "off limits"
// such that the robot cannot step on them. Design an algorithm to find a path for the robot from
// the top left to the bottom right.

// Sample path
let pathArr = [
  [1, 1, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 1, 1]
];

// expected return
// [
//   [0,0],
//   [0,1],
//   [1,1],
//   [1,2],
//   [2,2],
//   [3,2],
//   [3,3],
//   [3,4],
//   [4,4],
//   [5,4],
//   [5,5]
// ]

function getPath(mapGrid) {
  let pathArr = [];
  getValidRoute([5,5], pathArr, mapGrid);
  return pathArr;
}

function getValidRoute(cellArr, pathArr, mapGrid) {
  let [y, x] = cellArr;
  if (x < 0 || y < 0 || !mapGrid[y][x]) {
    return false;
  }
  let isAtOrigin = x === 0 && y === 0;

  if (
    isAtOrigin ||
    getValidRoute([y - 1, x], pathArr, mapGrid) ||
    getValidRoute([y, x - 1], pathArr, mapGrid)
    ) { 
    pathArr.push([y,x]);
    return true;
  }

  return false;
}