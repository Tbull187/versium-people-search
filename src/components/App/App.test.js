import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders App component', () => {
  const component = renderer.create(<App />).toJSON();
  expect(component).toMatchSnapshot();
});
