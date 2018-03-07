import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Board, Tetrimo } from './Components'


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
          title='shape'
          onPress={() => {
            this.props.navigation.navigate('Shape')}}
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

class Shape extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <Tetrimo shape={'L'} rotation={3} />
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
  Shape: {
    screen: Shape
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
