import React from 'react';
import ReactDOM from 'react-dom';
import AddClient from './AddClient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddClient />, div);
  ReactDOM.unmountComponentAtNode(div);
});