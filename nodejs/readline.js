const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is you name?\n', function(name) {
  console.log("Hello " + name);

  rl.close();
});
