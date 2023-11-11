import { View, Text } from 'react-native'
import AppWrapper from './AppWrapper'
import React from 'react'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const App = () => {
  return (
    <GestureHandlerRootView style = {{flex:1}}>
      <AppWrapper/>

    </GestureHandlerRootView>
  )
}

export default App