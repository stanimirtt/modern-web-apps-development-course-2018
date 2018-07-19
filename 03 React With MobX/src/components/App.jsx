import React, { Component } from 'react';
import axios from 'axios';
import startsWith from 'lodash/startsWith';
import lowerCase from 'lodash/lowerCase';
import filter from 'lodash/filter';

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedItem: null, term: '', items: ITEMS };

    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleItemSelect(item) {
    searchByTitle(item.title)
      .then(response => {
        this.setState({
          selectedItem: response.data
        });
      })
      .catch(error => console.log(error));
  }

  handleInputChange(value) {
    this.setState(
      {
        term: value
      },
      () => {
        if (value) {
          this.setState({
            items: filter(ITEMS, item => startsWith(lowerCase(item.title), lowerCase(this.state.term)))
          });
        } else {
          this.setState({
            items: ITEMS
          });
        }
      }
    );
  }

  render() {
    return (
      <div>
        <SearchBox term={this.state.term} onInputChange={this.handleInputChange} />
        <ItemList items={this.state.items} onItemSelect={this.handleItemSelect} />
        <ItemDetail item={this.state.selectedItem} />
      </div>
    );
  }
}

export default App;
