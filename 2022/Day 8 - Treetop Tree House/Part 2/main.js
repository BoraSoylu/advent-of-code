let input = readInput();
const width = input.slice(0, input.indexOf('\n')).length - 1;
const height = input.replace(/[^\n]/g, '').length;
let highScore = 0;
console.log(
  `score of 2,2 is ${calculateScore(2, 2)} height is ${getTree(2, 2)}`
);
for (let i = 2; i < width; i++) {
  for (let j = 2; j < height; j++) {
    if (calculateScore(i, j) > highScore) {
      console.log(
        `current tree: ${getTree(i, j)} with score ${calculateScore(
          i,
          j
        )} which is at ${i}, ${j}`
      );
      highScore = calculateScore(i, j);
    }
  }
}
console.log(highScore);

function calculateScore(x, y) {
  const treeHeight = getTree(x, y);

  let west_visible = 0;
  for (let i = x - 1; i >= 1; i--) {
    west_visible = west_visible + 1;
    if (getTree(i, y) >= treeHeight) {
      break;
    }
  }

  let east_visible = 0;
  for (let i = x + 1; i <= width; i++) {
    east_visible = east_visible + 1;

    if (getTree(i, y) >= treeHeight) {
      break;
    }
  }

  let north_visible = 0;
  for (let i = y - 1; i >= 1; i--) {
    north_visible = north_visible + 1;

    if (getTree(x, i) >= treeHeight) {
      break;
    }
  }

  let south_visible = 0;
  for (let i = y + 1; i <= height; i++) {
    south_visible = south_visible + 1;

    if (getTree(x, i) >= treeHeight) {
      break;
    }
  }
  return north_visible * south_visible * east_visible * west_visible;
}

function getTree(x, y) {
  return input[x - 1 + (y - 1) * (width + 2)];
}

function readInput() {
  const fs = require('fs');

  try {
    const data = fs.readFileSync('input.txt', 'utf8');
    return data;
  } catch (err) {
    console.error(err);
    return 'failed to read input.txt';
  }
}
