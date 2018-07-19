import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ term, onInputChange }) => {
  const onChange = e => onInputChange(e.target.value);

  return (
    <div className="search-box">
      <input value={term} onChange={onChange} placeholder="Search..." />
    </div>
  );
};

SearchBox.propTypes = {
  term: PropTypes.string,
  onInputChange: PropTypes.func
};

SearchBox.defaultProps = {
  term: '',
  onInputChange: () => true
};

export default SearchBox;
