import React from 'react';
import { shallow } from 'enzyme';
import BookListItem from '../../components/BookListItem';
import books from '../fixtures/books';

test('should render books list item with book', () => {
  const wrapper = shallow(<BookListItem {...books[0]} />);
  expect(wrapper).toMatchSnapshot();
});
