import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('snapshot test', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
