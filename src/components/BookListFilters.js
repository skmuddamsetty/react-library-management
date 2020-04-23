import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByPrice,
  setStartDate,
  setEndDate,
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class BookListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChangeHandler = ({ startDate, endDate }) => {
    // startDate and endDate are moment instances that are passed by Date Range Picker
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChangeHandler = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  textChangeHandler = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  selectChangeHandler = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'price') {
      this.props.sortByPrice();
    }
  };

  render() {
    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input
              className='text-input'
              type='text'
              value={this.props.filters.text}
              onChange={this.textChangeHandler}
              placeholder='Search Books'
            />
          </div>
          <div className='input-group__item'>
            <select
              className='select'
              onChange={this.selectChangeHandler}
              value={this.props.filters.sortBy}
            >
              <option value='price'>Price</option>
              <option value='date'>Published Date</option>
            </select>
          </div>
          <div className='input-group__item'>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChangeHandler}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChangeHandler}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByPrice: () => dispatch(sortByPrice()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookListFilters);
