import React from 'react';
import { shallow } from 'enzyme';
import { BooksSummary } from '../../components/BooksSummary';
import books from '../fixtures/books';

test('should render BooksSummary properly', () => {
  const wrapper = shallow(<BooksSummary />);
  expect(wrapper).toMatchSnapshot();
});

test('should render BooksSummary with one expense', () => {
  const wrapper = shallow(<BooksSummary booksCount={1} booksTotal={23500} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render BooksSummary with multiple expenses', () => {
  const wrapper = shallow(
    <BooksSummary booksCount={23} booksTotal={2342344234} />
  );
  expect(wrapper).toMatchSnapshot();
});
