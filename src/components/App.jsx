import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from "./Modal";
// import FetchPicture from "../services/picture-api";
import "../styles/styles.css";

export class App extends Component {
  state = {
    pictureName: '',
    showModal: false,
    largePicture: ''
  };

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  toggleModal = (picture) => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
      largePicture: {picture}
    }))

  }

  render() {
    const {pictureName, showModal, largePicture} = this.state;
    
    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictureName={pictureName} showModal={this.toggleModal}/>
        {showModal && <Modal largePicture={largePicture}/>}
      </div>
    );
  }
}
