'use strict';

// write your code here
const logo = document.getElementsByClassName('logo')[0];
const message = document.createElement('div');

message.setAttribute('class', 'message');

function createPromise() {
  return new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      message.classList.add('error-message');
      reject(new Error('Promise was rejected!'));
      document.body.append(message);
    }, 3000);

    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
      document.body.append(message);
      clearTimeout(timeout);
    });
  });
}

createPromise()
  .then((success) => {
    message.textContent = success;
  })
  .catch((err) => {
    message.textContent = err.message;
  });
