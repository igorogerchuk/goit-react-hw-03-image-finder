import React, { Component, createRef } from 'react';
import SearchForm from '../SearchForm';
import fetchAPIPictures from '../../services/pixabay-api';
import Gallery from '../Gallery';
import LoadMoreButton from '../LoadMoreButton';
import ErrorNotification from '../ErrorNotification';
import Loader from '../Loader';
import styles from './ImageFinder.module.css';

export default class ImageFinder extends Component {
  imageFinder = createRef();

  state = {
    pictures: [],
    isLoading: false,
    pageNumber: 1,
    query: '',
    error: null,
    scrollHeight: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchPictures();
    }
    window.scrollTo(0, this.state.scrollHeight);
  }

  onSearch = query => {
    this.setState({ query, pictures: [], pageNumber: 1 });
  };

  fetchPictures = () => {
    const { query, pageNumber } = this.state;

    this.setState({
      isLoading: true,
      scrollHeight: this.imageFinder.current.scrollHeight,
    });

    fetchAPIPictures(query, pageNumber)
      .then(pictures => {
        this.setState(state => ({
          pictures: [...state.pictures, ...pictures],
          pageNumber: state.pageNumber + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { pictures, error, isLoading } = this.state;
    return (
      <div ref={this.imageFinder} className={styles.imagefinder}>
        <SearchForm onSubmit={this.onSearch} />
        {error && <ErrorNotification message={error.message} />}
        {isLoading && <Loader />}
        {pictures.length > 0 && <Gallery pictures={pictures} />}
        {pictures.length > 0 && (
          <LoadMoreButton onLoadMore={this.fetchPictures} />
        )}
      </div>
    );
  }
}
