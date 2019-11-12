import React, { Component, createRef } from 'react';
import Img from 'react-image';
import Loader from '../Loader';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

export default class Modal extends Component {
  overlay = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }

    this.props.onClose();
  };

  handleOverlayClick = e => {
    if (this.overlay.current && e.target !== this.overlay.current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { image } = this.props;
    return createPortal(
      <div
        className={styles.overlay}
        ref={this.overlay}
        onClick={this.handleOverlayClick}
        role="presentation"
      >
        <div className={styles.modal}>
          <Img
            className={styles.image}
            src={image}
            alt="pixabay"
            loader={<Loader />}
          />
        </div>
      </div>,
      MODAL_ROOT,
    );
  }
}
