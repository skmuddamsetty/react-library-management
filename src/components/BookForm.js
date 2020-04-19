import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datePicker.css';

class BookForm extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
    createdAt: moment(),
    calendarFocused: false,
    error: '',
  };
  titleChangeHandler = (e) => {
    const title = e.target.value;
    this.setState(() => ({
      title,
    }));
  };
  descriptionChangeHandler = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description,
    }));
  };
  priceChangeHandler = (e) => {
    const price = e.target.value;
    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        price,
      }));
    }
  };
  dateChangeHandler = (createdAt) => {
    if (createdAt) {
      this.setState(() => {
        createdAt;
      });
    }
  };
  dateFocusChangeHandler = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused,
    }));
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.price) {
      this.setState(() => ({
        error: 'Please provide title and price for the book!',
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        price: parseFloat(this.state.price, 10) * 100, // converting to cents by multiplying with 100
        publishedAt: moment(this.state.createdAt).valueOf(), // since createdAt is a moment object converting it to timestamp using valueOf
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            placeholder='Title'
            autoFocus
            value={this.state.title}
            onChange={this.titleChangeHandler}
          />
          <input
            type='text'
            placeholder='Amount'
            value={this.state.price}
            onChange={this.priceChangeHandler}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.dateChangeHandler}
            onFocusChange={this.dateFocusChangeHandler}
            focused={this.state.calendarFocused}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder='Add a description for your book'
            value={this.state.description}
            onChange={this.descriptionChangeHandler}
          ></textarea>

          <button>Add Book</button>
        </form>
      </div>
    );
  }
}

export default BookForm;
