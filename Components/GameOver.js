import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

class GameOver extends Component {
  render() {
    const { params } = this.props.navigation.state
    const score = params ? params.score : null

    return (
      <View style={styles.container}>
        <Text>GAME OVER</Text>
        <Text>SCORE</Text>
        <Text>{score}</Text>

        <Button
        title='new game'
        onPress={() => {
          this.props.navigation.navigate('Game')}}
        />

        <Button
        title='menu'
        onPress={() => {
          this.props.navigation.navigate('Menu')}}
        />

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
})

export default withNavigation(GameOver)
