import {connect} from 'react-redux';

import {mapStateToProps} from './mapstatetoprops';

import {mapDispatchToProps} from './mapdispatchtoprops';

import Login from './login';

var LoginConnect = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginConnect;