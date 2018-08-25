const bananaDiv = document.getElementById('banana');
bananaDiv.innerHTML = 'I m a banana';

let counter = 0;
counter = counter + 1;
counter +=1;
counter++;

console.log('counter:', counter);
const greetingElement  = document.getElementById('greeting');
// greetingElement.innerHTML = 'Hello My name is Ripal';
const firstName = 'Ripal';
const lastName = 'Patel';
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;