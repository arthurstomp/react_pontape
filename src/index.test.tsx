import React from 'react';
import Index from './index'
import renderer from 'react-test-renderer';

test('Render "Hello"', () => {
  const component = renderer.create(
    <Index />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
