import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import pictureAPI from '../services/picture-api';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default class ImageGallery extends Component {
  state = {
    pictures: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      setTimeout(() => {
        pictureAPI
        .fetchPicture(nextName)
        .then(pictures => this.setState({ pictures, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
      }, 2000);
    }
  }
  render() {
    const { pictures, error, status } = this.state;
    if (status === 'idle') {
    }
    if (status === 'pending') {
       return <div>Loading...</div>
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <ul className="gallery">
          <ImageGalleryItem pictures={pictures}/>
        </ul>
      );
    }
  }
}
