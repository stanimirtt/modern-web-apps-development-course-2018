import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { searchByTitle } from '../actions/index';

const mapStateToProps = state => ({ items: state.items });

const mapDispatchToProps = dispatch => bindActionCreators({ onItemSelect: searchByTitle }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
