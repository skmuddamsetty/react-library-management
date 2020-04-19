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
class BookListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChangeHandler = ({ startDate, endDate }) => {
    // startDate and endDate are moment instances that are passed by Date Range Picker
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChangeHandler = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'price') {
              this.props.dispatch(sortByPrice());
            }
          }}
          value={this.props.filters.sortBy}
        >
          <option value='price'>Price</option>
          <option value='date'>Published Date</option>
        </select>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(BookListFilters);
