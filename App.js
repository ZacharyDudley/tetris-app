import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Input, Preview, GameOver } from './Components'


class Menu extends Component {
  constructor() {
    super()
    this.continueGame = false
  }

  componentDidMount() {
    AsyncStorage.getItem('inProgress')
      .then(isSavedGame => {
        this.continueGame = JSON.parse(isSavedGame)
        if (isSavedGame) {
          AsyncStorage.multiGet(['game', 'lines', 'tetrimo', 'nextTetrimo'])
            .then(res => {
              let game = JSON.parse(res[0][1])
              let lines = JSON.parse(res[1][1])
              let tetrimo = res[2][1]
              let nextTetrimo = res[3][1]
          })
        }
      })
      .catch(err => console.log('ERROR LOADING: ', err))
  }

  render() {
    return(
      <View style={ styles.container }>
        <Text>TETRIS</Text>
        <Button
          title='play'
          onPress={() => {
            this.props.navigation.navigate('Game', {
              continue: false
            })}}
        />
        {
          this.continueGame &&
          <Button
            title='continue'
            onPress={() => {
              this.props.navigation.navigate('Game', {
                continue: true,
                savedGame: game,
                score: lines,
                currentTetrimo: tetrimo,
                nextTetrimo: nextTetrimo
              })}}
          />
        }
      </View>
    )
  }
}

class Game extends Component {
  static navigationOptions = ({navigation}) => {
    const { params } = navigation.state

    return {
      headerTitle: params ? <Preview type={params.type} /> : ''
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

class EndGame extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <GameOver />
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
  EndGame: {
    screen: EndGame
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
