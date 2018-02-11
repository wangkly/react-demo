import {connect}from 'react-redux';
import Count from './counter';

import {mapStateToProps} from './mapstatetoprops';

import {mapDispatchToProps} from './mapdispatchtoprops';


const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Count);

export default Counter;