import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { GameBoard, createTetrimo, Space } from '../Components'


export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      tetrimoQueue: [],
      tetrimo: []
    }

    this.styleGrid = {backgroundColor: '#ffffff', borderStyle: 'solid', borderWidth: 1}
    this.styleFull = {backgroundColor: '#777777', borderStyle: 'solid', borderWidth: 2}

  }

  componentDidMount() {
    this.buildGameGrid()
  }

  buildGameGrid() {
    let grid = []
    let row = []

    for (var height = 0; height < 20; height++) {
      for (var width = 0; width < 11; width++) {
    // for (var height = 0; height < 3; height++) {
    //   for (var width = 0; width < 6; width++) {
        let space = 0
        row.push(space)
      }
      grid.push(row)
      row = []
    }

    this.setState({grid: grid})
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

  queueTetrimos() {
    const { tetrimoQueue } = this.state
    let tetrimoShapes = ['Z', 'S', 'L', 'J', 'T', 'I', 'O']
    // let nextId = 0
    // let nextId = tetrimoQueue[tetrimoQueue.length - 1].id++ || 0

    while (tetrimoQueue.length < 3) {
      let randomTetrimoType = tetrimoShapes[Math.floor(Math.random() * tetrimoShapes.length)]
      let newTetrimo = createTetrimo(randomTetrimoType)

      this.setState({tetrimoQueue: tetrimoQueue.push(newTetrimo)})
    }
  }

  placeTetrimo() {
    let grid = this.state.grid
    let tetrimo = this.state.tetrimoQueue.shift()
    let current = tetrimo.shape[tetrimo.rotation]

    // for (let i = 0; i < tetrimo.shape[0].length; i++) {
    //   grid[tetrimo.shape[0][i][1]][tetrimo.shape[0][i][0]] = 1
    // }

    // this.setState({grid: grid, tetrimo: tetrimo})
    for (let i = 0; i < current.length; i++) {
      grid[current[i][1]][current[i][0]] = 1
    }

    this.setState({grid: grid, tetrimo: tetrimo})
  }

  getTetrimo() {
    this.queueTetrimos()
    // this.setState({tetrimo: this.state.tetrimoQueue.shift()})
    // .then(() => {
      this.placeTetrimo()
    // })
  }

  canMoveDown() {
    // if yes move down
    // if no, queue tetrimos, and drop next
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.topButtons}>
          <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => {
            this.getTetrimo()
          }} />

          <TouchableOpacity
          style={styles.buttonRotate}
          onPress={() => {

          }} />

          <TouchableOpacity
          style={styles.buttonRight}
          onPress={() => {

          }} />
        </View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity
          style={styles.buttonDown}
          onPress={() => {

          }} />
        </View>
      </View>

      <View style={styles.gameContainer}>
      {
        <GameBoard grid={this.state.grid} />
        // this.state.grid && this.state.grid.map((row, y) => {
        //   return (
        //     <View key={y} style={{flexDirection: 'row'}}>
        //     {
        //       row.map((cell, x) => {
        //         return (
        //           cell === 0
        //             ? <Space key={`${x}, ${y}`} coords={[x, y]} style={ this.styleGrid } />
        //             : <Space key={`${x}, ${y}`} coords={[x, y]} style={ this.styleFull } />
        //         )
        //       })
        //     }
        //     </View>
        //   )
        // })
      }
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  },
  gameContainer: {
    flex: 1,
    position: 'absolute',
    zIndex: 1
  },
  topButtons: {
    flex: 2.7,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  bottomButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonRight: {
    flex: 1,
    backgroundColor: 'rgba(50, 50, 50, 0.1)'
  },
  buttonLeft: {
    flex: 1,
    backgroundColor: 'rgba(50, 50, 50, 0.1)'
  },
  buttonRotate: {
    flex: 1.5,
    backgroundColor: 'rgba(100, 100, 100, 0.1)'
  },
  buttonDown: {
    flex: 1,
    backgroundColor: 'rgba(100, 100, 100, 0.1)'
  }

})
