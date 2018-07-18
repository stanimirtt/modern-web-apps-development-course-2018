import React from 'react';
import PropTypes from 'prop-types';

const ItemDetail = ({ item }) =>
  item ? (
    <div className="item-detail">
      <p className="info">
        <img src={item.Poster} alt={item.Title} width="100%" />
      </p>
      <p className="info">{item.Title}</p>
      <p className="info plot">{item.Plot}</p>
    </div>
  ) : (
    <div className="item-detail">
      <div className="info">No selected item.</div>
    </div>
  );

ItemDetail.propTypes = {
  item: PropTypes.shape({
    Title: PropTypes.string,
    Plot: PropTypes.string,
    Poster: PropTypes.string
  })
};

ItemDetail.defaultProps = {
  item: {}
};

export default ItemDetail;
