import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Board, Space } from './Components'


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
        <Button
          title='space'
          onPress={() => {
            this.props.navigation.navigate('Cell')}}
        />
      </View>
    )
  }
}

class Game extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <Board />
      </View>
    )
  }
}

class Cell extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Space open={true} />
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
  Cell: {
    screen: Cell
  }
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
