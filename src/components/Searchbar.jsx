import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    picture: '',
  };

  handleInputChange = e => {
    this.setState({ picture: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    const { picture } = this.state;
    e.preventDefault();
    if (picture.trim() === '') {
      return;
    }
    this.props.onSubmit(picture);
    this.setState({ picuture: '' });
  };

  render() {
    const { picture } = this.state;
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            value={picture}
            onChange={this.handleInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
