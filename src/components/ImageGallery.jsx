import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import FetchPicture from '../services/picture-api';
import LoadMoreButton from './Button';
import '../styles/styles.css';
import { RotatingLines } from 'react-loader-spinner';
const api = new FetchPicture();

export default class ImageGallery extends Component {
  state = {
    pictures: [],
    error: null,
    status: 'idle',
    load_button: false,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      setTimeout(() => {
        api.query = nextName;
        api
          .fetchArticles()
          .then(({ hits }) =>
            this.setState({ pictures: [...hits], status: 'resolved' })
          )
          .catch(error => this.setState({ error, status: 'rejected' }));
        api.resetPage();
      }, 500);
    }
  }

  onLoadMoreClick = e => {
    this.setState({ load_button: true });
    setTimeout(() => {
      api
        .fetchArticles()
        .then(({ hits }) =>
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...hits],
            status: 'resolved',
            load_button: false,
          }))
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }, 500);
  };

  render() {
    const { pictures, error, status } = this.state;
    const styles = {
      textAlign: 'center',
    };
    if (status === 'idle') {
    }
    if (status === 'pending') {
      return (
        <div style={styles}>
          <RotatingLines
            strokeColor="#3f51b5"
            strokeWidth="5"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
        </div>
      );
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className="ImageGallery">
            <ImageGalleryItem pictures={pictures} showModal={this.props.showModal}/>
          </ul>
          {this.state.load_button ? (
            <div style={styles}>
              <RotatingLines
                strokeColor="#3f51b5"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
              />
            </div>
          ) : (
            <LoadMoreButton onClick={this.onLoadMoreClick} />
          )}
        </>
      );
    }
  }
}
