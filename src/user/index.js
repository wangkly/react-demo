import {connect} from 'react-redux';

import {mapStateToProps} from './mapstatetoprops';

import {mapDispatchToProps} from './mapdispatchtoprops';

import User from './user';
 
var userConnect = connect(mapStateToProps,mapDispatchToProps)(User);

export default userConnect;