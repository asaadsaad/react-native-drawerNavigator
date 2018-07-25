import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

export default class App extends Component {
  render() {
    return (
      <MyDrawerNavigator></MyDrawerNavigator>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="md-home" size={24} />
        <Text>Home</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Open Drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    )
  }
}
class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    )
  }
}
const MyStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      // header: null,
      title: 'Homepage'
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings'
    }
  }

})

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      // header: null,
      title: 'Homepage'
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings'
    }
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
