import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Space } from '../Components'


export default class GameBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: []
    }

    this.styleGrid = {backgroundColor: '#ffffff', borderStyle: 'solid', borderWidth: 1}
    this.styleFull = {backgroundColor: '#777777', borderStyle: 'solid', borderWidth: 2}
  }

  componentWillReceiveProps(props) {
    this.setState({grid: props.grid})
  }

  render() {
    return (
      <View style={ styles.container }>
        {
          this.state.grid && this.state.grid.map((row, y) => {
            return (
              <View key={y} style={{flexDirection: 'row'}}>
              {
                row.map((cell, x) => {
                  return (
                    cell === 0
                      ? <Space key={`${x}, ${y}`} coords={[x, y]} style={ this.styleGrid } />
                      : <Space key={`${x}, ${y}`} coords={[x, y]} style={ this.styleFull } />
                  )
                })
              }
              </View>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
