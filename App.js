import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Input, Preview, GameOver, About } from './Components'


class Menu extends Component {
  constructor() {
    super()
    this.state = {
      continue: false,
      savedGame: [],
      score: 0,
      currentTetrimo: '',
      nextTetrimo: ''
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('inProgress')
      .then(isSavedGame => {
        if (JSON.parse(isSavedGame)) {
          AsyncStorage.multiGet(['game', 'lines', 'tetrimo', 'nextTetrimo'])
            .then(res => {
              this.setState({
                continue: true,
                savedGame: JSON.parse(res[0][1]),
                score: JSON.parse(res[1][1]),
                currentTetrimo: res[2][1],
                nextTetrimo: res[3][1]
              })
          })
        }
      })
      .catch(err => console.log('ERROR LOADING: ', err))
  }

  render() {
    return(
      <View style={ styles.container }>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            TETRIS
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='play'
            color='#000000'
            onPress={() => {
              this.props.navigation.navigate('Game', {
                continue: false
              })}}
          />
          {
            this.state.continue &&
            <Button
              title='continue'
              color='#000000'
              onPress={() => {
                this.props.navigation.navigate('Game', {
                  continue: true,
                  savedGame: this.state.savedGame,
                  score: this.state.score,
                  currentTetrimo: this.state.currentTetrimo,
                  nextTetrimo: this.state.nextTetrimo
                })}}
            />
          }
          <Button
            title='about'
            color='#000000'
            onPress={() => {
              this.props.navigation.navigate('Credits')}}
          />
        </View>
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
        <GameOver />
    )
  }
}

class Credits extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <About />
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
    screen: EndGame,
    navigationOptions: {
      headerLeft: null
    }
  },
  Credits: {
    screen: Credits
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
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // titleContainer: {
  //   width: '70%',
  // },
  // title: {
  //   fontSize: 100,
  //   fontWeight: '100'
  // },
  // buttonContainer: {
  //   alignItems: 'flex-end',
  //   width: '70%',
  // },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    width: '70%',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 100,
    fontWeight: '100'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    width: '70%',
  },
})
