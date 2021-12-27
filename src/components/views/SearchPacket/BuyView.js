import { connect } from 'react-redux';

import BuyComponent from './BuyComponent';

const mapStateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapStateToProps,null)(BuyComponent);
