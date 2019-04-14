import {connect} from 'react-redux';

import {mapDispatchToProps} from './mapdispatchtoprops';
import {mapStateToProps} from './mapstatetoprops';

import Article from './article';

var ArticleConnect = connect(mapStateToProps,mapDispatchToProps)(Article);

export default ArticleConnect;