import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByPrice } from '../actions/filters';
const BookListFilters = (props) => (
  <div>
    <input
      type='text'
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        } else if (e.target.value === 'price') {
          props.dispatch(sortByPrice());
        }
      }}
      value={props.filters.sortBy}
    >
      <option value='price'>Price</option>
      <option value='date'>Published Date</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(BookListFilters);
