'use strict';

// write your code here
function createPromise() {
  return new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      message.setAttribute('class', 'message error-message');
      reject(new Error('Promise was rejected!'));

      document.body.append(message);
    }, 3000);

    logo.addEventListener('click', (e) => {
      if (e.target) {
        resolve('Promise was resolved!');
        document.body.append(message);
        window.clearTimeout(timeout);
      }
    });
  });
}

const logo = document.getElementsByClassName('logo')[0];
const message = document.createElement('div');

message.setAttribute('class', 'message');

createPromise()
  .then((success) => {
    message.textContent = success;
  })
  .catch((err) => {
    message.textContent = err;
  });
