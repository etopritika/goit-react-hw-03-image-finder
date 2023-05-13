import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import '../styles/styles.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onClose);
  }

  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
