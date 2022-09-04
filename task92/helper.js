export const askNameAndGreet = () => {
  const name = readlineSync.question('Please enter your name: ');
  const readlineSync = require('readline-sync');
  import readlineSync from 'readline-sync';
  console.log(`Hello, ${name}!`);
}