import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'


export default class Space extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
      style: props.style,
      xCoords: props.coords[0],
      yCoords: props.coords[1],
    }
  }

  render() {
    return (
      <View style={ [styles.space, this.props.style] } />
      // <View style={ [styles.space, this.props.style] }>
      // {
      //     <Text>{`${this.state.xCoords}, ${this.state.yCoords}`}</Text>
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
})
