import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Space } from '../Components'


export default class Board extends Component {
  constructor() {
    super()
    this.state = {
      grid: [],
      tetrimoQueue: []
    }

    this.styleGrid = {backgroundColor: '#ffffff', borderStyle: 'solid', borderWidth: 1}
  }

  componentDidMount() {
    this.buildGameGrid()
  }

  buildGameGrid() {
    let grid = []
    let row = []

    for (var height = 0; height < 20; height++) {
      for (var width = 0; width < 10; width++) {
        let space = 0
        row.push(space)
      }
      grid.push(row)
      row = []
    }

    this.setState({grid: grid})
  }

  renderGameGrid() {
    return this.state.grid.map((row, y) => {
      return (
        <View key={y} style={{flexDirection: 'row'}}>
        {
          row.map((cell, x) => {
            return (
              <Space key={`${x}, ${y}`} style={ this.styleGrid } />
              // <Space key={j} open={true} coords={[j, i]} />
            )
          })
        }
        </View>
      )
    })
  }

  isSpaceFull(xCoord, yCoord) {
    let spaceIsFull

    if (this.state.grid[yCoord][xCoord] === 0) {
      spaceIsFull = false
    } else {
      spaceIsFull = true
    }

    return spaceIsFull
  }

  fillTetrimoQueue() {
    const { tetrimoQueue } = this.state
    let tetrimoShapes = ['Z', 'S', 'L', 'J', 'T', 'I', 'O']
    let randomTetrimoType = tetrimoShapes[Math.floor(Math.random(0, tetrimoShapes.length) + 1)]
    let nextId = tetrimoQueue[tetrimoQueue.length - 1].id++ || 0

    while (tetrimoQueue.length < 3) {
      tetrimoQueue.push({shape: randomTetrimoType, id: nextId, rotation: 0})
    }
  }

  dropTetrimo() {
    let currentTetrimo = this.state.tetrimoQueue.shift()
  }

  canMoveDown(tetrimoBlocks) {
    for (let i = 0; i < tetrimoBlocks.length; i++) {
      if (this.isSpaceFull(tetrimoBlocks[i].xCoord, tetrimoBlocks[i].yCoord + 1)) {
        return false
      }
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.renderGameGrid() }
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
