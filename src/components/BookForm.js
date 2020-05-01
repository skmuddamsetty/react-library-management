import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.book ? props.book.title : '',
      description: props.book ? props.book.description : '',
      price: props.book ? (props.book.price / 100).toString() : '',
      createdAt: props.book ? moment(props.book.publishedAt) : moment(),
      calendarFocused: false,
      publisher: props.book ? props.book.publisher : '',
      error: '',
    };
  }

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
  publisherChangeHandler = (e) => {
    const value = e.target.value;
    this.setState(() => ({ publisher: value }));
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
      <form onSubmit={this.submitHandler} className='form'>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input
          className='text-input'
          type='text'
          placeholder='Title'
          autoFocus
          value={this.state.title}
          onChange={this.titleChangeHandler}
        />
        <input
          className='text-input'
          type='text'
          placeholder='Publisher'
          autoFocus
          value={this.state.publisher}
          onChange={this.publisherChangeHandler}
        />
        <input
          className='text-input'
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
          className='text-area'
          placeholder='Add a description for your book'
          value={this.state.description}
          onChange={this.descriptionChangeHandler}
        ></textarea>
        <div>
          <button className='button'>Save Book</button>
        </div>
      </form>
    );
  }
}

export default BookForm;
