import React from 'react';
import { shallow } from 'enzyme';
import { EditBookPage } from '../../components/EditBookPage';
import books from '../fixtures/books';

let startEditBook, startRemoveBook, history, wrapper;

beforeEach(() => {
  startEditBook = jest.fn();
  startRemoveBook = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditBookPage
      startEditBook={startEditBook}
      history={history}
      startRemoveBook={startRemoveBook}
      book={books[2]}
    />
  );
});

test('should render EditBookPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditBook', () => {
  wrapper.find('BookForm').prop('onSubmit')(books[2]);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(startEditBook).toHaveBeenLastCalledWith(books[2].id, books[2]);
});

test('should handle startRemoveBook', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenCalledWith('/');
  expect(startRemoveBook).toHaveBeenLastCalledWith({ id: books[2].id });
});
