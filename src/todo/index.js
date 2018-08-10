import {connect} from 'react-redux'

import TODO from './todo';

import {mapStateToProps} from './mapstatetoprops'

import  {mapDispatchToProps} from './mapdispatchtoprops'

 const Todos = connect(
    mapStateToProps,
    mapDispatchToProps
)(TODO)

export default Todos;