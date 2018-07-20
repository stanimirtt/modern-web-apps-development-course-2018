import React from 'react';
import { observer, inject } from 'mobx-react';
import { SearchBox, ItemList, ItemDetail } from '../components';
import { appStatePropType, appStatePropTypeDefaults } from '../stores';

// TODO: Convert to dummy
@inject('appState')
@observer
class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBox />
        <ItemList />
        <ItemDetail item={this.props.appState.selectedItem} />
      </div>
    );
  }
}

Home.wrappedComponent.propTypes = {
  appState: appStatePropType
};

Home.wrappedComponent.defaultProps = {
  appState: appStatePropTypeDefaults
};

export default Home;
