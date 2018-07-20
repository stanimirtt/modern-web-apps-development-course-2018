import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { observer, inject } from 'mobx-react';
import { appStatePropType, appStatePropTypeDefaults } from '../stores';

// http://www.omdbapi.com/
const API_KEY = '98697c87';
const API_URL = 'http://www.omdbapi.com';

const searchByTitle = term => axios.get(`${API_URL}/?t=${term}&apikey=${API_KEY}`);

@inject('appState')
@observer
class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemSelect = this.handleItemSelect.bind(this);
  }

  handleItemSelect = item => {
    searchByTitle(item.title)
      .then(response => {
        this.props.appState.setSelectedItem(response.data);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <li onClick={() => this.handleItemSelect(this.props.item)} className="item">
        {this.props.item.title}
      </li>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    plot: PropTypes.string
  }).isRequired
};

ListItem.wrappedComponent.propTypes = {
  appState: appStatePropType
};

ListItem.wrappedComponent.defaultProps = {
  appState: appStatePropTypeDefaults
};

export default ListItem;
