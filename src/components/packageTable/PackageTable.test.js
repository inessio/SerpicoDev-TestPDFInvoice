import React from 'react';
import ReactDOM from 'react-dom';
import PackageTable from './PackageTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PackageTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
