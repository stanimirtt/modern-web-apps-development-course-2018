import React from 'react';
import PropTypes from 'prop-types';

const ItemDetail = ({ item }) =>
  item ? (
    <div className="item-detail">
      <p className="info">{item.title}</p>
      <p className="info">{item.plot}</p>
    </div>
  ) : (
    <div className="item-detail">
      <div className="info">No selected item.</div>
    </div>
  );

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    plot: PropTypes.string
  })
};

ItemDetail.defaultProps = {
  item: {}
};

export default ItemDetail;
