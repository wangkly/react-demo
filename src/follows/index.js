import {connect} from 'react-redux';

import {mapStateToProps} from './mapstatetoprops';
import {mapDispatchToProps} from './mapdispatchtoprops';
import Follows from './follows';

var followCon = connect(mapStateToProps,mapDispatchToProps)(Follows);

export default followCon;