import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'


export default class Space extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: props.open,
      xCoords: props.coords[0],
      yCoords: props.coords[1],
    }
  }

  render() {
    return (
      <View style={ this.state.open ? styles.open : styles.full }>
      {
        <Text>{`${this.state.xCoords}, ${this.state.yCoords}`}</Text>
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  open: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 0.5,
    borderStyle: 'solid'
  },
  full: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#777777',
    borderColor: '#000000',
    borderWidth: 0.5,
    borderStyle: 'solid'
  },
})
