import React from 'react';
class BookForm extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
  };
  titleChangeHandler = (e) => {
    const title = e.target.value;
    this.setState({ title });
  };
  descriptionChangeHandler = (e) => {
    const description = e.target.value;
    this.setState({ description });
  };
  priceChangeHandler = (e) => {
    const price = e.target.value;
    if (price.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({ price });
    }
  };
  render() {
    return (
      <div>
        <form>
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
