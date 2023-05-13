import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from "./Modal";
import "../styles/styles.css";

export class App extends Component {
  state = {
    pictureName: '',
    showModal: false,
    largePicture: null
  };

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
    // this.setState({largePicture: e.currentTarget.getAttribute('srcSet')})
  };

  render() {
    const {pictureName, showModal} = this.state;
    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictureName={pictureName} showModal={this.toggleModal}/>
        {showModal && <Modal onClose={this.toggleModal}><h1>TEST</h1><img src="" alt="" /></Modal>}
      </div>
    );
  }
}
