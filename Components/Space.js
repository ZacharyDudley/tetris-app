import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'


export default class Space extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: props.open
    }
  }

  render() {
    return (
      <View style={ this.state.open ? styles.open : styles.full } />
    )
  }
}

const styles = StyleSheet.create({
  open: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  full: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    backgroundColor: '#777777',
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid'
  },
})
