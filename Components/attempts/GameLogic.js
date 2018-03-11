import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { GameBoard, Shape } from '../Components'


export default class GameLogic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      tetrimoQueue: [],
      tetrimo: [
        [3, 2],
        [4, 2],
        [5, 2],
        [4, 1]
      ]
    }
  }

  componentDidMount() {
    this.buildGameGrid()
  }



  componentWillReceiveProps(props) {
    console.log(props)
    // switch (props.input) {
    //   case 'left':
    //     this.canMoveLeft()
    //   return

    //   case 'right':
    //     this.canMoveRight()
    //   return

    //   case 'rotate':
    //     this.canRotate()
    //   return

    //   case 'down':
    //     this.canMoveDown()
    //   return

    //   default:
    //     this.canMoveDown()
    // }
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
    // this.setTetrimoOnGrid(grid)

    // this.setState((prevState, props) => ({
    //   grid: props.grid
    // }))
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
    let { tetrimo } = this.state
    let grid = this.state.grid

    for (let i = 0; i < tetrimo.length; i++) {
      grid[tetrimo[i][1]][tetrimo[i][0]] = 1
    }

    this.setState({grid: grid})
  }

  dropTetrimo() {
    this.fillTetrimoQueue()
    this.setState({tetrimo: this.state.tetrimoQueue.shift()})
    // this.setTetrimoOnGrid()
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
            // input = 'LEFT'
            // console.log('LEFT')
          }} />

          <TouchableOpacity
          style={styles.buttonRotate}
          onPress={() => {
            // input = 'ROTATE'
            // console.log('ROTATE')
          }} />

          <TouchableOpacity
          style={styles.buttonRight}
          onPress={() => {
            // input = 'RIGHT'
            // console.log('RIGHT')
          }} />
        </View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity
          style={styles.buttonDown}
          onPress={() => {
            this.dropTetrimo()
          }} />
        </View>
      </View>

      <View style={styles.gameContainer}>
        <GameBoard grid={this.state.grid} />
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#ffffff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
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
    // backgroundColor: '#222222'
    backgroundColor: 'rgba(100, 100, 100, 0.5)'
  },
  buttonLeft: {
    flex: 1,
    // backgroundColor: '#999999'
    backgroundColor: 'rgba(50, 50, 50, 0.5)'
  },
  buttonRotate: {
    flex: 1.5,
    backgroundColor: 'rgba(200, 200, 200, 0.5)'
  },
  buttonDown: {
    flex: 1,
    backgroundColor: 'rgba(300, 300, 300, 0.5)'
    // backgroundColor: '#333333'
  }

})
