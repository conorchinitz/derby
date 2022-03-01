import './style.css';
import Code from './car.png';

document.addEventListener('DOMContentLoaded', function main(){
  const header = document.createElement('h1');
  header.innerText = 'Welcome to Derby';
  document.body.append(header);

  const code = new Image();
  code.src = Code;

  document.body.append(code);
})
