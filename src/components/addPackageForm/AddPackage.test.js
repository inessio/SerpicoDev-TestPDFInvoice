import React from 'react';
import ReactDOM from 'react-dom';
import AddPackage from './AddPackage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddPackage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
