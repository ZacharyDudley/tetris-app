import React, { Component } from 'react'
import { StyleSheet, View, Modal, Text } from 'react-native'

export default class GameOver extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      score: 0
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(props) {
    this.setState({visible: props.visible, score: props.score})
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          transparent={false}
          visible={this.state.visible}>

          <Text>GAME OVER</Text>
          <Text>SCORE</Text>
          <Text>{this.state.score}</Text>
        </Modal>
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
