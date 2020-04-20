import React from 'react';
import { shallow } from 'enzyme';
import { BookListFilters } from '../../components/BookListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter,
  sortByDate,
  sortByPrice,
  setStartDate,
  setEndDate,
  history,
  wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByPrice = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <BookListFilters
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByPrice={sortByPrice}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      history={history}
      filters={filters}
    />
  );
});

test('should render BookListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render BookListFilters with altFilters correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle textChange', () => {
  const value = 'book';
  wrapper.find('input').at(0).simulate('change', { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sortByDate', () => {
  const value = 'date';
  wrapper.find('select').at(0).simulate('change', { target: { value } });
  expect(sortByDate).toHaveBeenCalled();
});
test('should sortByPrice', () => {
  const value = 'price';
  wrapper.find('select').at(0).simulate('change', { target: { value } });
  expect(sortByPrice).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = altFilters.startDate;
  const endDate = altFilters.endDate;
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle dateFocusChanges', () => {
  const calendarFocused = 'endDate'; // this should be endDate or startDate only
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
