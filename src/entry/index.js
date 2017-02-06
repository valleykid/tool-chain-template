import React from 'react';
import ReactDOM from 'react-dom';
import Father from '../components/Father.jsx';
import helper from '../helper/test';
import '../style/test.less';

ReactDOM.render(<Father>{helper.title}</Father>, document.getElementById('root'));
