import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import startsWith from 'lodash/startsWith';
import lowerCase from 'lodash/lowerCase';
import filter from 'lodash/filter';
import { observer } from 'mobx-react';

import SearchBox from './SearchBox';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

const ITEMS = [
  { id: 1, title: 'Baby Driver', plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 2, title: 'Dunkirk', plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 3, title: 'Logan', plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 4, title: 'Get Out', plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 5, title: 'Wonder Woman', plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
];

// http://www.omdbapi.com/
const API_KEY = '98697c87';
const API_URL = 'http://www.omdbapi.com';

const searchByTitle = term => axios.get(`${API_URL}/?t=${term}&apikey=${API_KEY}`);

// TODO: Use dummy component
@observer
class App extends Component {
  constructor(props) {
    super(props);

    this.props.appState.setItems(ITEMS);

    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleItemSelect(item) {
    searchByTitle(item.title)
      .then(response => {
        this.props.appState.setSelectedItem(response.data);
      })
      .catch(error => console.log(error));
  }

  handleInputChange(value) {
    this.props.appState.setTerm(value);

    if (value) {
      this.props.appState.setItems(
        filter(ITEMS, item => startsWith(lowerCase(item.title), lowerCase(this.props.appState.term)))
      );
    } else {
      this.props.appState.setItems(ITEMS);
    }
  }

  // TODO: Remove props and use inject to pass them
  render() {
    return (
      <div>
        <SearchBox term={this.props.appState.term} onInputChange={this.handleInputChange} />
        <ItemList items={this.props.appState.items} onItemSelect={this.handleItemSelect} />
        <ItemDetail item={this.props.appState.selectedItem} />
      </div>
    );
  }
}

App.propTypes = {
  appState: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        plot: PropTypes.string
      })
    ),
    term: PropTypes.string,
    selectedItem: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      plot: PropTypes.string
    }),
    setSelectedItem: PropTypes.func,
    setTerm: PropTypes.func,
    setItems: PropTypes.func
  })
};

App.defaultProps = {
  appState: {}
};

export default App;
