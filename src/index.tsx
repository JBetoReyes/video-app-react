import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('app'));
