import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const ItemList = ({ items, onItemSelect }) =>
  items.length > 0 ? (
    <ul className="items">{items.map(item => <ListItem key={item.id} item={item} onItemSelect={onItemSelect} />)}</ul>
  ) : (
    <ul className="items">
      <li className="item">No found items.</li>
    </ul>
  );

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      plot: PropTypes.string
    })
  ),
  onItemSelect: PropTypes.func
};

ItemList.defaultProps = {
  items: [],
  onItemSelect: () => true
};

export default ItemList;
