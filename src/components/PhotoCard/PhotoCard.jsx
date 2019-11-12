import React, { Component } from 'react';
import Modal from '../Modal';
import styles from './PhotoCard.module.css';

export default class PhotoCard extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    const {
      webformatURL,
      largeImageURL,
      likes,
      views,
      comments,
      downloads,
    } = this.props.picture;

    return (
      <div className={styles.photoCard}>
        <img src={webformatURL} alt="pixabay" />

        <div className={styles.stats}>
          <p className={styles.statsItem}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>

        <button
          type="button"
          className={styles.fullscreenButton}
          onClick={this.openModal}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
        {isModalOpen && (
          <Modal image={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
