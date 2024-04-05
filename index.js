// Here"s the solution
// elementID

const main = document.querySelector('#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'Nature';
newHeader.textContent = 'Nature is part of life';
document.body.appendChild(newHeader);
