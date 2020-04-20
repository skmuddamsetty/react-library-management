import React from 'react';
import { shallow } from 'enzyme';
import BookForm from '../../components/BookForm';
import books from '../fixtures/books';
import moment from 'moment';

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

// https://jestjs.io/docs/en/expect.html
test('should call onSubmit prop for valid form submission', () => {
  // jest.fn() returns the new spy function
  const onSubmitSpy = jest.fn();
  // render BookForm
  const wrapper = shallow(<BookForm book={books[1]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error')).toBe('');
  // validating that onSubmit function inside BookForm is called with the correct params
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    title: books[1].title,
    description: books[1].description,
    price: books[1].price,
    publishedAt: books[1].publishedAt,
  });
});

test('should set createdAt state onDateChange on SingleDatePicker', () => {
  const now = moment();
  const wrapper = shallow(<BookForm />);
  // how to trigger the prop from the child component is done below
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendarFocused onFocusChange of SingleDatePicker', () => {
  const focused = true;
  const wrapper = shallow(<BookForm />);
  // how to trigger the prop from the child component is done below
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toEqual(focused);
});
