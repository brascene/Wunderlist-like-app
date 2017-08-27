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
    label: 'Pocetna',
    screen: 'home',
    icon: require('../images/ic_action_home.png'),
    title: 'Lista aktivnosti'
  },
  {
    label: 'Profil',
    screen: 'profile',
    icon: require('../images/ic_action_account_box.png'),
    title: 'Profile page'
  }
]

Navigation.startTabBasedApp({
  tabs,
  animationType: 'fade',
   appStyle: {
     tabBarBackgroundColor: '#2D1462',
     navBarButtonColor: '#2D1462',
     tabBarButtonColor: '#ffffff',
     navBarTextColor: '#ffffff',
     tabBarSelectedButtonColor: '#ffffff',
     //navigationBarColor: '#003a66',
     navBarBackgroundColor: '#2D1462',
     statusBarColor: '#2D1462',
     tabFontFamily: 'BioRhyme-Bold',
     forceTitlesDisplay: true,
     navigationBarColor: '#2D1462',
     navBarTitleTextCentered: true
   }
})
