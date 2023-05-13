import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import '../styles/styles.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
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
