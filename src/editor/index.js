import {connect} from 'react-redux';

import {mapStateToProps} from './mapstatetoprops';

import {mapDispatchToProps} from './mapdispatchtoprops';

import Editor from './editor';

var EditorConnect = connect(mapStateToProps,mapDispatchToProps)(Editor);

export default EditorConnect;