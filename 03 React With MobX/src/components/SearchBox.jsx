import React from 'react';
import { observer, inject } from 'mobx-react';
import { appStatePropType, appStatePropTypeDefaults } from '../stores';

@inject('appState')
@observer
class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.appState.setTerm(e.target.value);
  }

  render() {
    return (
      <div className="search-box">
        <input value={this.props.appState.term} onChange={this.handleInputChange} placeholder="Search..." />
      </div>
    );
  }
}

SearchBox.wrappedComponent.propTypes = {
  appState: appStatePropType
};

SearchBox.wrappedComponent.defaultProps = {
  appState: appStatePropTypeDefaults
};

export default SearchBox;
