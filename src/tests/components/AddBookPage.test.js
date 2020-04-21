import React from 'react';
import { shallow } from 'enzyme';
import { AddBookPage } from '../../components/AddBookPage';
import books from '../fixtures/books';

let startAddBook, history, wrapper;

beforeEach(() => {
  startAddBook = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddBookPage startAddBook={startAddBook} history={history} />
  );
});

test('should render AddBookPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('BookForm').prop('onSubmit')(books[1]);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(startAddBook).toHaveBeenLastCalledWith(books[1]);
});
