import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    pictureName: '',
    error: null,
    status: 'idle',
  };

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  render() {
    const {pictureName} = this.state;
    
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictureName={pictureName}/>
      </>
    );
  }
}
