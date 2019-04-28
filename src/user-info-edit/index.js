import {connect} from 'react-redux';

import {mapStateToProps} from './mapstatetoprops';
import {mapDispatchToProps} from './mapdispatchtoprops';

import UserEdit from './user-edit';

let UserEditConnect = connect(mapStateToProps,mapDispatchToProps)(UserEdit);

export default UserEditConnect;