import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native'
import { withNavigation } from 'react-navigation'
import { GameBoard, createTetrimo } from '../Components'


class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      tetrimoQueue: [],
      playing: false,
      gameOver: false
    }
    this.lines = 0
    this.loopInterval = 1000
    this.tetrimo = {}
  }

  componentDidMount() {
    this.buildGameGrid()
  }

  componentWillUnmount() {
    if (!this.state.playing && !this.state.gameOver) {
      this.saveGame()
    }
    clearInterval(this.falling)
  }

  async saveGame() {
    try {
      await AsyncStorage.setItem('game', this.state.grid)
    } catch (error) {
      console.log('ERROR SAVING: ', error)
    }
  }

  async loadGame() {
    try {
      const savedGame = await AsyncStorage.getItem('game')
      this.setState({grid: savedGame})
    } catch (error) {
      console.log('ERROR LOADING: ', error)
    }
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

    this.props.navigation.setParams({type: this.state.tetrimoQueue[0].type})

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

  rotate() {
    let { grid } = this.state
    let oldTetrimo = this.tetrimo.shape[this.tetrimo.rotation]
    for (let oldBlocks = 0; oldBlocks < oldTetrimo.length; oldBlocks++) {
      grid[oldTetrimo[oldBlocks][1]][oldTetrimo[oldBlocks][0]] = 0
    }

    this.tetrimo.rotation = ++this.tetrimo.rotation % 4
    for (let eachBlock = 0; eachBlock < this.tetrimo.shape[this.tetrimo.rotation].length; eachBlock++) {
      grid[this.tetrimo.shape[this.tetrimo.rotation][eachBlock][1]][this.tetrimo.shape[this.tetrimo.rotation][eachBlock][0]] = 2
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
      if (grid[rotation[eachBlock][1]][oneLeft] === 1 || oneLeft < 0) {
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
      if (grid[rotation[eachBlock][1]][oneRight] === 1 || oneRight > grid[rotation[eachBlock][1]].length - 1) {
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

  canTetrimoRotate() {
    let { grid } = this.state
    let rotation = this.tetrimo.shape[(this.tetrimo.rotation + 1) % 4]

    for (let eachBlock = 0; eachBlock < rotation.length; eachBlock++) {
      if (!grid[rotation[eachBlock][1]][rotation[eachBlock][0]] === 0 || !grid[rotation[eachBlock][1]][rotation[eachBlock][0]] === 2 || grid[rotation[eachBlock][1]][rotation[eachBlock][0]] === undefined) {
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
      this.checkLines(newGrid)
    }
  }

  rotateTetrimo() {
    if (this.canTetrimoRotate()) {
      this.rotate()
    }
  }

  loop() {
    clearInterval(this.falling)

    if (this.state.playing) {
      this.falling = setInterval(() => {
        this.moveTetrimoDown()
      }, this.loopInterval)
    }
  }

  noFullLines(grid) {
    for (let row = grid.length - 1; row > 0; row--) {
      if (!grid[row].includes(0)) {
        return false
      }
    }
    return true
  }

  removeAndCountLine(grid) {
    for (let row = grid.length - 1; row > 0; row--) {
      if (!grid[row].includes(0)) {
        this.lines++
        for (let eachRow = row; eachRow > 0; eachRow--) {
          for (let cellIndex = 0; cellIndex < grid[eachRow].length; cellIndex++) {
            grid[eachRow][cellIndex] = grid[eachRow - 1][cellIndex]
          }
        }
      }
    }
    return grid
  }

  checkLines(grid) {
    if (grid[0].includes(1)) {
      this.endGame()
    } else if (!this.noFullLines(grid)) {
      while (!this.noFullLines(grid)) {
        let newGrid = this.removeAndCountLine(grid)
        grid = newGrid
      }
    } else {
      this.setState({grid: grid}, () => {
        this.queueTetrimos()
      })
    }
  }

  endGame() {
    clearInterval(this.falling)

    this.setState({playing: false, gameOver: true}, () => {
      this.props.navigation.push('EndGame', {
        score: this.lines
      })
    })
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
              if (this.state.playing) {
                this.moveTetrimoLeft()
              }
            }} />

            <TouchableOpacity
            style={styles.buttonRotate}
            onPress={() => {
              if (this.state.playing) {
              this.rotateTetrimo()
              }
            }} />

            <TouchableOpacity
            style={styles.buttonRight}
            onPress={() => {
              if (this.state.playing) {
                this.moveTetrimoRight()
              }
            }} />
          </View>

          <View style={styles.bottomButtons}>
            <TouchableOpacity
            style={styles.buttonDown}
            onPress={() => {
              if (this.state.playing) {
                this.moveTetrimoDown()
              }
            }}
            onLongPress={() => {
              clearInterval(this.falling)
              clearInterval(this.quickLoopInterval)
              this.quickLoopInterval = setInterval(() => {
                if (this.state.playing) {
                  this.moveTetrimoDown()
                }
              }, 5)
            }}
            onPressOut={() => {
              clearInterval(this.quickLoopInterval)
              if (this.state.playing) {
                this.loop()
              }
            }}
            />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.gameContainer}>
          {
            <GameBoard grid={this.state.grid} />
          }
          </View>

          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>SCORE</Text>
            <Text style={styles.linesText}>{ this.lines }</Text>
          </View>
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
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  gameContainer: {
    flex: 1,
    padding: 4
  },
  scoreContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: '100'
  },
  linesText: {
    fontSize: 30,
    fontWeight: '200'
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

export default withNavigation(Input)
