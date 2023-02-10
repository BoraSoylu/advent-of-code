let input = readInput();

const finalStacks = parseMoves(input);

let finalString = '';
for (let i = 0; i < finalStacks.length; i++) {
  finalString = `${finalString}${finalStacks[i][finalStacks[i].length - 1]}`;
}

console.log(finalString);

function parseMoves(input) {
  let stacks = initializeAllStacks(input);

  const totalLength = input.length;

  let index = input.indexOf('move ');

  while (index !== totalLength) {
    let moveString = '';
    while (input[index] !== '\n') {
      moveString = `${moveString}${input[index]}`;
      index = index + 1;
    }
    index = index + 1;
    moveBox(moveString, stacks);
  }
  return stacks;
}

/**
 *
 * @param {string} moveCommand
 * @param {Array[]} stacks
 */
function moveBox(moveCommand, stacks) {
  const amount = parseInt(
    moveCommand.slice(
      moveCommand.indexOf('move ') + 5,
      moveCommand.indexOf(' from')
    )
  );

  const from =
    parseInt(
      moveCommand.slice(
        moveCommand.indexOf('from ') + 5,
        moveCommand.indexOf(' to')
      )
    ) - 1;

  const to = parseInt(moveCommand.slice(moveCommand.indexOf(' to') + 3)) - 1;

  for (i = 0; i < amount; i++) {
    stacks[to].push(stacks[from].pop());
  }
}

/**
 *
 * @param {string} input
 */
function initializeAllStacks(input) {
  let allStacks = [];
  const stackCount = input.slice(0, input.indexOf('\n')).length / 4;
  for (let index = 0; index < stackCount; index++) {
    allStacks.push(initializeSingleStack(input, index));
  }
  return allStacks;
}

/**
 *
 * @param {string} input
 * @param {number} index
 */
function initializeSingleStack(input, index) {
  const position = index * 4 + 1;
  const lineLength = input.slice(0, input.indexOf('\n')).length + 1;
  let currentLine = 0;
  let stackArr = [];

  while (true) {
    const currentCharIndex = position + lineLength * currentLine;

    const currentChar = input[currentCharIndex];
    if (isNumeric(currentChar)) {
      break;
    }
    if (currentChar.match(/[A-Z]/i)) {
      stackArr.push(currentChar);
    }
    currentLine++;
  }
  stackArr.push(index);
  return stackArr.reverse();
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
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
