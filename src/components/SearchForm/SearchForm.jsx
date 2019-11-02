import React from 'react';

const SearchForm = ({ onSubmit }) => (
  <form class="search-form">
    <input type="text" autocomplete="off" placeholder="Search images..." />
  </form>
);

export default SearchForm;
