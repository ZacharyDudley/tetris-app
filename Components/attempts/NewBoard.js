import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Space, NewTetrimo, Shape } from '../Components'


export default class Board extends Component {
  constructor() {
    super()
    this.state = {
      grid: [],
      tetrimoQueue: [],
      tetrimo: {},
      isPlaying: false
    }

    this.styleGrid = {backgroundColor: '#ffffff', borderStyle: 'solid', borderWidth: 1}
    this.styleEmpty = {backgroundColor: '#ffffff'}
    this.styleFull = {backgroundColor: '#777777', borderStyle: 'solid', borderWidth: 2}

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
    // let nextId = tetrimoQueue[tetrimoQueue.length - 1].id++ || 0
    let nextId = 0

    while (tetrimoQueue.length < 3) {
      let randomTetrimoType = tetrimoShapes[Math.floor(Math.random() * tetrimoShapes.length)]
      let nextTetrimo = new Shape()
      // let nextTetrimo = new NewTetrimo()
      // nextTetrimo.buildTetrimo(nextId, randomTetrimoType)
      tetrimoQueue.push(nextTetrimo)
    }
  }

  setTetrimoOnGrid() {
    let currentTetrimo = this.state.tetrimoQueue.shift()
    let grid = this.state.grid
grid[4][4] = 1
    // for (let i = 0; i < currentTetrimo[0].length; i++) {
    //   grid[currentTetrimo[0][i][1]][currentTetrimo[0][i][0]] = 1
    // }
    this.setState({grid: grid})
  }

  dropTetrimo() {
    this.fillTetrimoQueue()
    // this.setState({tetrimo: this.state.tetrimoQueue.shift()}, this.setTetrimoOnGrid)
    this.setTetrimoOnGrid()
  }

  canMoveDown(tetrimoBlocks) {
    for (let i = 0; i < tetrimoBlocks.length; i++) {
      if (this.isSpaceFull(tetrimoBlocks[i].xCoord, tetrimoBlocks[i].yCoord + 1)) {
        return false
      }
    }
  }

  startGame() {
    this.setState({isPlaying: true})
    this.dropTetrimo()
  }

  render() {
    return (
      <View style={ styles.container }>

        {
          <TouchableOpacity
          style={styles.container}
          onPress={() => this.startGame()}>
          <Text>START</Text>
          </TouchableOpacity>
        }

        {
          // this.renderGameGrid()
        }

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
