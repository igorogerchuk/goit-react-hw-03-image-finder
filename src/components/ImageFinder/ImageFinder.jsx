import React, { Component } from 'react';
import SearchForm from '../SearchForm';

export default class ImageFinder extends Component {
  func = () => {
    return 5;
  };
  render() {
    <div className="imagefinder">
      <SearchForm onSubmit={func} />
    </div>;
  }
}
