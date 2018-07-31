import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item, onItemSelect }) => {
  const onClick = () => onItemSelect(item.title);

  return (
    <li onClick={onClick} className="item">
      {item.title}
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    plot: PropTypes.string
  }),
  onItemSelect: PropTypes.func
};

ListItem.defaultProps = {
  item: {},
  onItemSelect: () => true
};

export default ListItem;
