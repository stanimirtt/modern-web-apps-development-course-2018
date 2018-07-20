import { observable, action, computed } from 'mobx';
import startsWith from 'lodash/startsWith';
import lowerCase from 'lodash/lowerCase';
import filter from 'lodash/filter';
import PropTypes from 'prop-types';

export class AppState {
  @observable
  items = [
    { id: 1, title: 'Baby Driver', plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 2, title: 'Dunkirk', plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 3, title: 'Logan', plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 4, title: 'Get Out', plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 5, title: 'Wonder Woman', plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
  ];
  @observable term = '';
  @observable selectedItem = {};
  @action
  setSelectedItem(item) {
    this.selectedItem = item;
  }
  @action
  setTerm(value) {
    this.term = value;
  }
  @computed
  get filteredItemsByTerm() {
    if (this.term) {
      return filter(this.items, item => startsWith(lowerCase(item.title), lowerCase(this.term)));
    }

    return this.items;
  }
}

export const appStatePropType = PropTypes.shape({
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
  filteredItemsByTerm: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      plot: PropTypes.string
    })
  )
});

export const appStatePropTypeDefaults = {
  items: [],
  term: '',
  selectedItem: {},
  filteredItemsByTerm: [],
  setSelectedItem: () => true,
  setTerm: () => true
};
