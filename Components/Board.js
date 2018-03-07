import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Space } from '../Components'


export default class Board extends Component {
  constructor() {
    super()
    this.state = {
      grid: []
    }
  }

  componentDidMount() {
    this.buildGrid()
  }

  buildGrid() {
    let grid = []
    let row = []

    for (var height = 1; height < 20; height++) {
      for (var width = 1; width < 10; width++) {
        let space = 0
        row.push(space)
      }
      grid.push(row)
      row = []
    }

    this.setState({grid: grid})
  }

  renderGrid() {
    return this.state.grid.map((row, i) => {
      return (
        <View key={i} style={{flexDirection: 'row'}}>
        {
          row.map((cell, j) => {
            return (
              <Space key={j} open={true} />
            )
          })
        }
        </View>
      )
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.renderGrid() }
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
  },
})
