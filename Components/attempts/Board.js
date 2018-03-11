import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Space } from '../Components'


export default class Board extends Component {
  constructor() {
    super()
    this.state = {
      grid: [],
      tetrimoQueue: [],
      tetrimo: {}
    }

    this.styleGrid = {backgroundColor: '#ffffff', borderStyle: 'solid', borderWidth: 1}
  }

  componentDidMount() {
    this.buildGameGrid()
    this.dropTetrimo()
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
              // <Space key={`${x}, ${y}`} style={ this.styleGrid } />
              <Space key={x} coords={[x, y]} style={ this.styleGrid } />
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
    let nextId = 0
    // let nextId = tetrimoQueue[tetrimoQueue.length - 1].id++ || 0

    while (tetrimoQueue.length < 3) {
      let randomTetrimoType = tetrimoShapes[Math.floor(Math.random() * tetrimoShapes.length)]
      tetrimoQueue.push({shape: randomTetrimoType, id: nextId})
    }
  }

  setTetrimoOnGrid() {
    let { tetrimo } = this.state.tetrimo

    for (let i = 0; i < tetrimo.grid.length; i++) {
      for (let j = 0; j < tetrimo.grid[i].length; j++) {
        let grid = this.state.grid
        grid[tetrimo.grid[i][j]] = 1
        this.setState({grid})
      }
    }
  }

  dropTetrimo() {
    this.fillTetrimoQueue()
    this.setState({tetrimo: this.state.tetrimoQueue.shift()})
console.log(this.state.tetrimo)
    // this.setTetrimoOnGrid()
  }

  canMoveDown(tetrimoBlocks) {
    for (let i = 0; i < tetrimoBlocks.length; i++) {
      if (this.isSpaceFull(tetrimoBlocks[i].xCoord, tetrimoBlocks[i].yCoord + 1)) {
        return false
      }
    }
  }

  render() {
    console.log(this.state.tetrimo)
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
