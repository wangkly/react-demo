import {connect} from 'react-redux';

import Home from './home';

import {mapStateToProps} from './mapstatetoprops';

import {mapDispatchToProps} from './mapdispatchtoprops';


let HomePage = connect(mapStateToProps,mapDispatchToProps)(Home)

export default HomePage;