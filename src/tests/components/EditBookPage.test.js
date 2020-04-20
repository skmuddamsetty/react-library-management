import React from 'react';
import { shallow } from 'enzyme';
import { EditBookPage } from '../../components/EditBookPage';
import books from '../fixtures/books';

let editBook, removeBook, history, wrapper;

beforeEach(() => {
  editBook = jest.fn();
  removeBook = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditBookPage
      editBook={editBook}
      history={history}
      removeBook={removeBook}
      book={books[2]}
    />
  );
});

test('should render EditBookPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editBook', () => {
  wrapper.find('BookForm').prop('onSubmit')(books[2]);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(editBook).toHaveBeenLastCalledWith(books[2].id, books[2]);
});

test('should handle removeBook', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenCalledWith('/');
  expect(removeBook).toHaveBeenLastCalledWith({ id: books[2].id });
});
