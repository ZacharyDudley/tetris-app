import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { GameBoard, createTetrimo, Space } from '../Components'


export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      tetrimoQueue: [],
      playing: false,
    }

    this.tetrimo = {}
    this.styleGrid = {backgroundColor: '#ffffff', borderStyle: 'solid', borderWidth: 1}
    this.styleFull = {backgroundColor: '#777777', borderStyle: 'solid', borderWidth: 2}

  }

  componentDidMount() {
    this.buildGameGrid()
  }

  componentWillUnmount() {
    clearInterval(this.falling)
  }

  buildGameGrid() {
    let grid = []
    let row = []

    for (var height = 0; height < 20; height++) {
      for (var width = 0; width < 11; width++) {
        let space = 0
        row.push(space)
      }
      grid.push(row)
      row = []
    }

    this.setState({grid: grid}, () => {
      this.start()
    })
  }

  queueTetrimos() {
    let queue = this.state.tetrimoQueue
    let tetrimoShapes = ['Z', 'S', 'L', 'J', 'T', 'I', 'O']
    // let nextId = 0
    // let nextId = tetrimoQueue[tetrimoQueue.length - 1].id++ || 0

    while (queue.length < 3) {
      let randomTetrimoType = tetrimoShapes[Math.floor(Math.random() * tetrimoShapes.length)]
      let newTetrimo = createTetrimo(randomTetrimoType)
      queue.push(newTetrimo)
    }

    this.tetrimo = this.state.tetrimoQueue.shift()
    let current = this.tetrimo.shape[this.tetrimo.rotation]
    let grid = this.state.grid

    for (let i = 0; i < current.length; i++) {
      grid[current[i][1]][current[i][0]] = 2
    }

    this.setState({grid: grid, tetrimoQueue: queue}, () => {
      this.loop()
    })
  }

  left() {
    let { grid } = this.state
    let oldTetrimo = this.tetrimo.shape[this.tetrimo.rotation]
    for (let oldBlocks = 0; oldBlocks < oldTetrimo.length; oldBlocks++) {
        grid[oldTetrimo[oldBlocks][1]][oldTetrimo[oldBlocks][0]] = 0
    }

    for (let eachRotation = 0; eachRotation < this.tetrimo.shape.length; eachRotation++) {
      for (let eachBlock = 0; eachBlock < this.tetrimo.shape[eachRotation].length; eachBlock++) {
        if (eachRotation === this.tetrimo.rotation) {
          this.tetrimo.shape[eachRotation][eachBlock][0]--
          grid[this.tetrimo.shape[eachRotation][eachBlock][1]][this.tetrimo.shape[eachRotation][eachBlock][0]] = 2
        } else {
          this.tetrimo.shape[eachRotation][eachBlock][0]--
        }
      }
    }

    this.setState({grid: grid}, () => {
      // this.loop()
    })
  }

  right() {
    let { grid } = this.state
    let oldTetrimo = this.tetrimo.shape[this.tetrimo.rotation]
    for (let oldBlocks = 0; oldBlocks < oldTetrimo.length; oldBlocks++) {
        grid[oldTetrimo[oldBlocks][1]][oldTetrimo[oldBlocks][0]] = 0
    }

    for (let eachRotation = 0; eachRotation < this.tetrimo.shape.length; eachRotation++) {
      for (let eachBlock = 0; eachBlock < this.tetrimo.shape[eachRotation].length; eachBlock++) {
        if (eachRotation === this.tetrimo.rotation) {
          this.tetrimo.shape[eachRotation][eachBlock][0]++
          grid[this.tetrimo.shape[eachRotation][eachBlock][1]][this.tetrimo.shape[eachRotation][eachBlock][0]] = 2
        } else {
          this.tetrimo.shape[eachRotation][eachBlock][0]++
        }
      }
    }

    this.setState({grid: grid}, () => {
      // this.loop()
    })
  }

  down() {
    let { grid } = this.state
    let oldTetrimo = this.tetrimo.shape[this.tetrimo.rotation]
    for (let oldBlocks = 0; oldBlocks < oldTetrimo.length; oldBlocks++) {
        grid[oldTetrimo[oldBlocks][1]][oldTetrimo[oldBlocks][0]] = 0
    }

    for (let eachRotation = 0; eachRotation < this.tetrimo.shape.length; eachRotation++) {
      for (let eachBlock = 0; eachBlock < this.tetrimo.shape[eachRotation].length; eachBlock++) {
        if (eachRotation === this.tetrimo.rotation) {
          this.tetrimo.shape[eachRotation][eachBlock][1]++
          grid[this.tetrimo.shape[eachRotation][eachBlock][1]][this.tetrimo.shape[eachRotation][eachBlock][0]] = 2
        } else {
          this.tetrimo.shape[eachRotation][eachBlock][1]++
        }
      }
    }

    this.setState({grid: grid}, () => {
      // this.loop()
    })
  }

  canTetrimoMoveLeft() {
    let { grid } = this.state
    let rotation = this.tetrimo.shape[this.tetrimo.rotation]

    for (let eachBlock = 0; eachBlock < rotation.length; eachBlock++) {
      let oneLeft = rotation[eachBlock][0] - 1
      if (!grid[rotation[eachBlock][1]][oneLeft] === 0 || !grid[rotation[eachBlock][1]][oneLeft] === 2 || oneLeft < 0) {
        return false
      }
    }

    return true
  }

  canTetrimoMoveRight() {
    let { grid } = this.state
    let rotation = this.tetrimo.shape[this.tetrimo.rotation]

    for (let eachBlock = 0; eachBlock < rotation.length; eachBlock++) {
      let oneRight = rotation[eachBlock][0] + 1
      if (!grid[rotation[eachBlock][1]][oneRight] === 0 || !grid[rotation[eachBlock][1]][oneRight] === 2 || oneRight > grid[rotation[eachBlock][1]].length - 1) {
        return false
      }

    }

    return true
  }

  canTetrimoMoveDown() {
    let { grid } = this.state
    let rotation = this.tetrimo.shape[this.tetrimo.rotation]

    for (let eachBlock = 0; eachBlock < rotation.length; eachBlock++) {
      let oneDown = rotation[eachBlock][1] + 1
      if (!grid[oneDown] || grid[oneDown][rotation[eachBlock][0]] === 1) {
        return false
      }
    }
    return true
  }

  moveTetrimoLeft() {
    if (this.canTetrimoMoveLeft()) {
      this.left()
    }
  }

  moveTetrimoRight() {
    if (this.canTetrimoMoveRight()) {
      this.right()
    }
  }

  moveTetrimoDown() {
    if (this.canTetrimoMoveDown()) {
      this.down()
    } else {
      let newGrid = this.state.grid
      let rotation = this.tetrimo.shape[this.tetrimo.rotation]

      for (let blocks = 0; blocks < rotation.length; blocks++) {
        newGrid[rotation[blocks][1]][rotation[blocks][0]] = 1
      }

      this.setState({grid: newGrid}, () => {
        this.queueTetrimos()
      })
    }
  }

  loop() {
    clearInterval(this.falling)
    this.falling = setInterval(() => {
      this.moveTetrimoDown()
    }, 1000)
  }

  start() {
    this.setState({playing: true})
    this.queueTetrimos()
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.topButtons}>
          <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => {
            this.moveTetrimoLeft()
          }} />

          <TouchableOpacity
          style={styles.buttonRotate}
          onPress={() => {

          }} />

          <TouchableOpacity
          style={styles.buttonRight}
          onPress={() => {
            this.moveTetrimoRight()
          }} />
        </View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity
          style={styles.buttonDown}
          onPress={() => {
            this.moveTetrimoDown()
          }} />
        </View>
      </View>

      <View style={styles.gameContainer}>
      {
        <GameBoard grid={this.state.grid} />
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
