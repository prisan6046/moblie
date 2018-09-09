/** @format */
import React from 'react'
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import Route  from './src/route';
import store from './src/action/index'

const ReduxApp = ()=>(
    <Provider store={store}>
        <Route />
    </Provider>
);

AppRegistry.registerComponent('ttpiapp', () => ReduxApp);
