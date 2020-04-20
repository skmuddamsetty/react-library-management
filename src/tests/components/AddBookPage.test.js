import React from 'react';
import { shallow } from 'enzyme';
import { AddBookPage } from '../../components/AddBookPage';
import books from '../fixtures/books';

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddBookPage onSubmit={onSubmit} history={history} />);
});

test('should render AddBookPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('BookForm').prop('onSubmit')(books[1]);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(books[1]);
});
