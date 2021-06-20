// import { registerRootComponent } from "expo";
// import React from "react";
// import { View } from "react-native";
// import App  from './App'

// export const COUNTER_CHANGE = 'COUNTER_CHANGE'

// registerRootComponent(App);



import { registerRootComponent } from "expo";
import React from "react";

import App  from './App'
import { Provider } from 'react-redux';
import configureStore from './configureStore';
const store = configureStore()


const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>

registerRootComponent(RNRedux);
