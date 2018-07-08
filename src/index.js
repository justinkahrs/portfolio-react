import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import './index.css';

WebFont.load({
  google: {
    families: ['Libre Baskerville', 'Noto Sans', 'Old Standard TT'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
