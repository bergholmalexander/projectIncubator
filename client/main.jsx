import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '/imports/ui/reducers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from '/imports/ui/theme';
import AppRouter from '/imports/startup/client/AppRouter';

Meteor.startup(() => {
  render(
    <Provider store={createStore(reducer)}>
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <AppRouter />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('react-target')
  );
});
