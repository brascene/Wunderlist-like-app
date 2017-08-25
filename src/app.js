import React from 'react'
import { AsynchStorage } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from '../screens/registerScreens'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import store from '../redux/store'

//import and pass store and provider to register screens
registerScreens(store, Provider)

const tabs = [
  {
    label: 'Home',
    screen: 'home',
    icon: require('../images/ic_action_home.png'),
    title: 'Wunderlist'
  },
  {
    label: 'Profile',
    screen: 'profile',
    icon: require('../images/ic_action_account_box.png'),
    title: 'Profile page'
  }
]

Navigation.startTabBasedApp({
  tabs,
  animationType: 'fade',
   appStyle: {
     //tabBarBackgroundColor: '#003a66',
     navBarButtonColor: '#ffffff',
     tabBarButtonColor: '#ffffff',
     navBarTextColor: '#ffffff',
     tabBarSelectedButtonColor: '#ffffff',
     //navigationBarColor: '#003a66',
     //navBarBackgroundColor: '#003a66',
     statusBarColor: '#002b4c',
     tabFontFamily: 'BioRhyme-Bold',
     forceTitlesDisplay: true,
     navigationBarColor: '#002b4c',
     navBarTitleTextCentered: true
   }
})
