import React from 'react';
import { observer, inject } from 'mobx-react';
import ListItem from './ListItem';
import { appStatePropType, appStatePropTypeDefaults } from '../stores';

@inject('appState')
@observer
class ItemList extends React.Component {
  render() {
    return this.props.appState.items ? (
      <ul className="items">
        {this.props.appState.filteredItemsByTerm.map(item => <ListItem key={item.id} item={item} />)}
      </ul>
    ) : (
      <ul className="items">
        <li className="item">No found items.</li>
      </ul>
    );
  }
}

ItemList.wrappedComponent.propTypes = {
  appState: appStatePropType
};

ItemList.wrappedComponent.defaultProps = {
  appState: appStatePropTypeDefaults
};

export default ItemList;
