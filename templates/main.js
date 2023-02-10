let input = readInput();
console.log(input);

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
