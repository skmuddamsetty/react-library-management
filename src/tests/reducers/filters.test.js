import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should setup sortBy to price', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_PRICE' });
  expect(state).toEqual({
    text: '',
    sortBy: 'price',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
  expect(state.sortBy).toBe('price');
});

test('should setup sortBy to date', () => {
  const defaultState = {
    text: '',
    sortBy: 'price',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const state = filtersReducer(defaultState, { type: 'SORT_BY_DATE' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
  expect(state.sortBy).toBe('date');
});

test('should setTextFilter', () => {
  const text = 'React';
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
  expect(state.text).toBe(text);
});

test('should setStartDate filter', () => {
  const startDate = moment().startOf('month');
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate,
  });
  expect(state.startDate).toBe(startDate);
});

test('should setEndDate filter', () => {
  const endDate = moment().startOf('month');
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate,
  });
  expect(state.endDate).toBe(endDate);
});
