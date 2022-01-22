let array = [
  ['a', 'a', 's'],
  [10, 's', 12],
  ['s', 21, 22]
]
function isGameOverHorizontally(grid) {
  if (grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2]) {
    return true
  } else if (grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2]) {
    return true
  } else if (grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2]) {
    return true
  } else {
    return false
  }
}
function isGameOverVertically(grid) {
  if (grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0]) {
    return true
  } else if (grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1]) {
    return true
  } else if (grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2]) {
    return true
  } else {
    return false
  }
}
function isGameOverDiagonally(grid) {
  if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
    return true
  } else if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
    return true
  } else {
    return false
  }
}
function isGameOver(grid) {
  if (
    isGameOverDiagonally(grid) ||
    isGameOverHorizontally(grid) ||
    isGameOverVertically(grid)
  ) {
    return true
  } else {
    return false
  }
}

console.log(isGameOver(array))
