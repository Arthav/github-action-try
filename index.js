// index.js
const greetings = ["Hello", "Hi", "Hey", "Hola", "Bonjour"];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

console.log(`${randomGreeting}, world!`);
