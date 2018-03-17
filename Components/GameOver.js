import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

class GameOver extends Component {
  render() {
    const { params } = this.props.navigation.state
    const score = params ? params.score : null

    return (
      // <View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.score}>SCORE</Text>
          <Text style={styles.score}>{score}</Text>

          <Text style={styles.title}>
            GAME
          </Text>
          <Text style={styles.title}>
            OVER
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

          <Button
          title='menu'
          color='#000000'
          onPress={() => {
            this.props.navigation.navigate('Menu')}}
          />
      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    width: '70%',
    alignItems: 'center',
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
  score: {
    fontWeight: '700'
  },
})

export default withNavigation(GameOver)
