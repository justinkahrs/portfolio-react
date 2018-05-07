import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import './index.css';

WebFont.load({
  google: {
    families: ['Playfair Display', 'Merriweather:300']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
