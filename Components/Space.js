import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'


export default class Space extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
      style: props.style
      // xCoords: props.coords[0],
      // yCoords: props.coords[1],
    }
  }

  render() {
    return (
      <View style={ [styles.space, this.state.style] } />
      // <View style={ this.state.open ? styles.open : styles.full }>
      // {
      //   // <Text>{`${this.state.xCoords}, ${this.state.yCoords}`}</Text>
      // }
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  space: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderColor: '#000000',
  },
  // full: {
  //   flex: 0,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 30,
  //   height: 30,
  //   backgroundColor: '#777777',
  //   borderColor: '#000000',
  //   borderWidth: 0.5,
  //   borderStyle: 'solid'
  // },
})
