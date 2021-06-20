import { registerRootComponent } from "expo";
import React from "react";
import { View } from "react-native";
// import App  from './App'

import App  from './app/App'

export const COUNTER_CHANGE = 'COUNTER_CHANGE'

registerRootComponent(App);

