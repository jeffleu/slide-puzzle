import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App/>, document.getElementById('app'));

// Button click sounds
const clickDown = document.querySelector('#clickSound');
const clickUp = document.querySelector('#clickSound2');
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('mousedown', () => clickDown.play());
  button.addEventListener('mouseup', () => clickUp.play());
});
