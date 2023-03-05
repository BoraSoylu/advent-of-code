let input = readInput();
input = input.split('\r\n');

const c = {
  headX: 0,
  headY: 0,
  tailX: 0,
  tailY: 0,
};

let visited = [];

input.forEach((element) => {
  parseMove(element);
});

console.log(visited.length);
console.log(visited);

function parseMove(move) {
  const direction = move.slice(0, 1);
  const moveCount = move.slice(2);
  for (let index = 0; index < moveCount; index++) {
    moveHead(direction);
  }
}

function moveHead(direction) {
  if (direction === 'U') {
    c.headX += 1;
  } else if (direction === 'D') {
    c.headX -= 1;
  } else if (direction === 'R') {
    c.headY += 1;
  } else if (direction === 'L') {
    c.headY -= 1;
  }
  moveTail();
}

function moveTail() {
  const xDif = c.headX - c.tailX;
  const yDif = c.headY - c.tailY;

  if (Math.abs(xDif) === 2) {
    c.tailX += xDif / 2;
  }
  if (Math.abs(yDif) === 2) {
    c.tailY += yDif / 2;
  }

  if (Math.abs(xDif) + Math.abs(yDif) === 3) {
    if (Math.abs(xDif) > Math.abs(yDif)) {
      c.tailY += yDif;
    } else {
      c.tailX += xDif;
    }
  }

  addNewPosition();
}

function addNewPosition() {
  for (let index = 0; index < visited.length; index++) {
    if (visited[index][0] === c.tailX && visited[index][1] === c.tailY) {
      return;
    }
  }
  visited.push([c.tailX, c.tailY]);
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
