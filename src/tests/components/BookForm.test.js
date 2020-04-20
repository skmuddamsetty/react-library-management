import React from 'react';
import { shallow } from 'enzyme';
import BookForm from '../../components/BookForm';
import books from '../fixtures/books';

test('should render BookForm Correctly', () => {
  const wrapper = shallow(<BookForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render BookForm with book data', () => {
  const wrapper = shallow(<BookForm book={books[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<BookForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set title on input change', () => {
  const value = 'Angular Book';
  const wrapper = shallow(<BookForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('input').at(0).simulate('change', { target: { value } });
  expect(wrapper.state('title')).toBe(value);
});

test('should set description on textarea change', () => {
  const value = 'Angular Book Description';
  const wrapper = shallow(<BookForm />);
  wrapper.find('textarea').at(0).simulate('change', { target: { value } });
  expect(wrapper.state('description')).toBe(value);
});

test('should set price on input change for valid price input', () => {
  const value = '200.25';
  const wrapper = shallow(<BookForm />);
  wrapper.find('input').at(1).simulate('change', { target: { value } });
  expect(wrapper.state('price')).toBe(value);
});

test('should not set price on input change for invalid price input', () => {
  const value = '200.251323';
  const wrapper = shallow(<BookForm />);
  wrapper.find('input').at(1).simulate('change', { target: { value } });
  expect(wrapper.state('price')).toBe('');
});
