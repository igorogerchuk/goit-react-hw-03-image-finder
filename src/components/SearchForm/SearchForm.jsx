import React, { Component } from 'react';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    inputValue: '',
  };

  handleInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);

    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          onChange={this.handleInput}
          value={this.state.inputValue}
        />
      </form>
    );
  }
}
