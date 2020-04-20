import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByPrice,
} from '../../actions/filters';
import moment from 'moment';

test('should setup setTextFilter Action Object with default value', () => {
  expect(setTextFilter()).toEqual({ type: 'SET_TEXT_FILTER', text: '' });
});

test('should setup setTextFilter Action Object', () => {
  const text = 'React';
  expect(setTextFilter(text)).toEqual({ type: 'SET_TEXT_FILTER', text });
});

test('should setup setStartDate Action Object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should setup setEndDate Action Object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

test('should setup sortByDate Action Object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('should setup sortByPrice Action Object', () => {
  const action = sortByPrice(moment(0));
  expect(action).toEqual({
    type: 'SORT_BY_PRICE',
  });
});
