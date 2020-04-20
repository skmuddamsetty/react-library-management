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
