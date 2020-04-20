import React from 'react';
import { shallow } from 'enzyme';
import { BooksList } from '../../components/BooksList';
import books from '../fixtures/books';

test('should render books list with books', () => {
  const wrapper = shallow(<BooksList books={books} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render books list with empty list', () => {
  const wrapper = shallow(<BooksList books={[]} />);
  expect(wrapper).toMatchSnapshot();
});
