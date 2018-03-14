import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Input, Preview } from './Components'


class Menu extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <Text>TETRIS</Text>
        <Button
          title='play'
          onPress={() => {
            this.props.navigation.navigate('Game')}}
        />
      </View>
    )
  }
}

class Game extends Component {
  static navigationOptions = ({navigation}) => {
    const { params } = navigation.state

    return {
      headerTitle: params ? <Preview type={params.type} /> : ''
      // title: params ? params.type : ''
    }
  }

  render() {
    return(
      <View style={ styles.container }>
        <Input />
      </View>
    )
  }
}

const RootStack = StackNavigator({
  Menu: {
    screen: Menu
  },
  Game: {
    screen: Game
  },
}, {
  initialRouteName: 'Menu'
})

export default class App extends Component {
  render() {
    return <RootStack />
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
