let input = readInput();
const width = input.slice(0, input.indexOf('\n')).length - 1;
const height = input.replace(/[^\n]/g, '').length;
let visibleTrees = width + width + height + height - 4;
for (let i = 2; i < width; i++) {
  for (let j = 2; j < height; j++) {
    if (isVisible(i, j)) visibleTrees = visibleTrees + 1;
  }
}
console.log(visibleTrees);

function isVisible(x, y) {
  const treeHeight = getTree(x, y);

  let west_visible = true;
  for (let i = 1; i < x; i++) {
    if (getTree(i, y) >= treeHeight) {
      west_visible = false;
    }
  }

  let east_visible = true;
  for (let i = x + 1; i <= width; i++) {
    if (getTree(i, y) >= treeHeight) {
      east_visible = false;
    }
  }

  let north_visible = true;
  for (let i = 1; i < y; i++) {
    if (getTree(x, i) >= treeHeight) {
      north_visible = false;
    }
  }

  let south_visible = true;
  for (let i = y + 1; i <= height; i++) {
    if (getTree(x, i) >= treeHeight) {
      south_visible = false;
    }
  }
  if (north_visible || south_visible || east_visible || west_visible) {
    return true;
  }
  return false;
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
