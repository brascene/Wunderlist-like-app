import { Navigation } from 'react-native-navigation'
import HifzApp from './home'
import Profile from './profile'

export function registerScreens(store, Provider) {
  Navigation.registerComponent('home', () => HifzApp, store, Provider)
  Navigation.registerComponent('profile', () => Profile)
}
