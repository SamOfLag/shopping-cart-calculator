const fs = require('fs');

console.log('Start reading file...');
fs.writeFile('message.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File has been saved!');
});
console.log('End of program');
