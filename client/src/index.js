import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './theme';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
