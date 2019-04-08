import {connect} from 'react-redux';

import{mapStateToProps} from './mapstatetoprops';

import{mapDispatchToProps} from './mapdispatchtoprops';

import Regist from './regist';

var RegistConnect = connect(mapStateToProps,mapDispatchToProps)(Regist);

export default RegistConnect;