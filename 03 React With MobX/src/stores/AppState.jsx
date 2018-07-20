import { observable, action } from 'mobx';

export class AppState {
  @observable items = [];
  @observable term = '';
  @observable selectedItem = {};
  // TODO: Show computed case
  @action
  setSelectedItem(item) {
    this.selectedItem = item;
  }
  @action
  setTerm(value) {
    this.term = value;
  }
  @action
  setItems(items) {
    this.items.replace(observable(items));
  }
}
