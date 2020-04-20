// import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
// import Header from '../../components/Header';

// test('should render Header correctly', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Library Management');
});

test('should render Header correctly based off of snapshot', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
