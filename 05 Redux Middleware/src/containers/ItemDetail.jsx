import { connect } from 'react-redux';
import ItemDetail from '../components/ItemDetail';

const mapStateToProps = state => ({ item: state.itemSelected });

export default connect(mapStateToProps)(ItemDetail);
