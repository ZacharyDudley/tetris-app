import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { GameBoard, createTetrimo, Space } from '../Components'


export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      tetrimoQueue: [],
      tetrimo: [],
      playing: false,
    }

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
    // for (var height = 0; height < 4; height++) {
    //   for (var width = 0; width < 7; width++) {
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

    let tetrimo = this.state.tetrimoQueue.shift()
    let current = tetrimo.shape[tetrimo.rotation]
    let grid = this.state.grid

    for (let i = 0; i < current.length; i++) {
      grid[current[i][1]][current[i][0]] = 2
    }

    this.setState({grid: grid, tetrimoQueue: queue}, () => {
      this.loop(tetrimo)
    })
  }

  // fireTetrimo() {
  //   let tetrimo = this.state.tetrimoQueue.shift()
  //   let current = tetrimo.shape[tetrimo.rotation]
  //   let grid = this.state.grid
  //   // for (let i = 0; i < tetrimo.shape[0].length; i++) {
  //   //   grid[tetrimo.shape[0][i][1]][tetrimo.shape[0][i][0]] = 1
  //   // }

  //   // this.setState({grid: grid, tetrimo: tetrimo})
  //   for (let i = 0; i < current.length; i++) {
  //     grid[current[i][1]][current[i][0]] = 2
  //   }

  //   this.setState({grid: grid, tetrimo: tetrimo})
  // }

  renderTetrimo(tetrimo) {
    let grid = this.state.grid
    // let { tetrimo } = this.state
    let orientation = tetrimo.shape[tetrimo.rotation]

    for (let i = 0; i < orientation.length; i++) {
      grid[orientation[i][1]][orientation[i][0]] = 2
    }

    // this.setState({grid: grid})
  }

  findTetrimo() {
    let { grid } = this.state
    let tetrimoBlocks = []

    grid.map(space => {
      if (space === 2) {
        tetrimoBlocks.push(space)
      }
    })

    return tetrimoBlocks
  }

  left(tetrimo) {
    let { grid } = this.state
    let oldTetrimo = tetrimo.shape[tetrimo.rotation]
    for (let oldBlocks = 0; oldBlocks < oldTetrimo.length; oldBlocks++) {
        grid[oldTetrimo[oldBlocks][1]][oldTetrimo[oldBlocks][0]] = 0
    }

    for (let eachRotation = 0; eachRotation < tetrimo.shape.length; eachRotation++) {
      for (let eachBlock = 0; eachBlock < tetrimo.shape[eachRotation].length; eachBlock++) {
        if (eachRotation === tetrimo.rotation) {
          tetrimo.shape[eachRotation][eachBlock][0]--
          grid[tetrimo.shape[eachRotation][eachBlock][1]][tetrimo.shape[eachRotation][eachBlock][0]] = 2
        } else {
          tetrimo.shape[eachRotation][eachBlock][0]--
        }
      }
    }

    this.setState({grid: grid, tetrimo: tetrimo}, () => {
      this.loop()
      // this.loop(tetrimo)
    })
  }

  canTetrimoMoveLeft(tetrimo) {
    let { grid } = this.state
    let rotation = tetrimo.shape[tetrimo.rotation]

    for (let eachBlock = 0; eachBlock < rotation.length; eachBlock++) {
      let oneLeft = rotation[eachBlock][0] - 1
      if (!grid[rotation[eachBlock][1]][rotation[eachBlock][oneLeft]] || grid[rotation[eachBlock][1]][rotation[eachBlock][oneLeft]] === 1) {
        return false
      }
    }

    return true
  }

  moveTetrimoLeft(tetrimo) {
    if (this.canTetrimoMoveLeft(tetrimo)) {
      this.left(tetrimo)
    }
  }

  right(tetrimo) {
    let { grid } = this.state
    let oldTetrimo = tetrimo.shape[tetrimo.rotation]
    for (let oldBlocks = 0; oldBlocks < oldTetrimo.length; oldBlocks++) {
        grid[oldTetrimo[oldBlocks][1]][oldTetrimo[oldBlocks][0]] = 0
    }

    for (let eachRotation = 0; eachRotation < tetrimo.shape.length; eachRotation++) {
      for (let eachBlock = 0; eachBlock < tetrimo.shape[eachRotation].length; eachBlock++) {
        if (eachRotation === tetrimo.rotation) {
          tetrimo.shape[eachRotation][eachBlock][0]++
          grid[tetrimo.shape[eachRotation][eachBlock][1]][tetrimo.shape[eachRotation][eachBlock][0]] = 2
        } else {
          tetrimo.shape[eachRotation][eachBlock][0]++
        }
      }
    }

    this.setState({grid: grid, tetrimo: tetrimo}, () => {
      this.loop(tetrimo)
    })
  }

  canTetrimoMoveRight(tetrimo) {
    let { grid } = this.state
    let rotation = tetrimo.shape[tetrimo.rotation]

    for (let eachBlock = 0; eachBlock < rotation.length; eachBlock++) {
      let oneLeft = rotation[eachBlock][0] + 1
      if (!grid[rotation[eachBlock][1]][rotation[eachBlock][oneLeft]] || grid[rotation[eachBlock][1]][rotation[eachBlock][oneLeft]] === 1) {
        return false
      }
    }

    return true
  }

  moveTetrimoRight(tetrimo) {
    if (this.canTetrimoMoveRight(tetrimo)) {
      this.right(tetrimo)
    }
  }

  down(tetrimo) {
    let { grid } = this.state
    let oldTetrimo = tetrimo.shape[tetrimo.rotation]
    for (let oldBlocks = 0; oldBlocks < oldTetrimo.length; oldBlocks++) {
        grid[oldTetrimo[oldBlocks][1]][oldTetrimo[oldBlocks][0]] = 0
    }

    for (let eachRotation = 0; eachRotation < tetrimo.shape.length; eachRotation++) {
      for (let eachBlock = 0; eachBlock < tetrimo.shape[eachRotation].length; eachBlock++) {
        if (eachRotation === tetrimo.rotation) {
          tetrimo.shape[eachRotation][eachBlock][1]++
          grid[tetrimo.shape[eachRotation][eachBlock][1]][tetrimo.shape[eachRotation][eachBlock][0]] = 2
        } else {
          tetrimo.shape[eachRotation][eachBlock][1]++
        }
      }
    }

    this.setState({grid: grid, tetrimo: tetrimo}, () => {
      this.loop(tetrimo)
    })
  }

  canTetrimoMoveDown(tetrimo) {
    let { grid } = this.state

    let rotation = tetrimo.shape[tetrimo.rotation]

    for (let eachBlock = 0; eachBlock < rotation.length; eachBlock++) {
      let oneDown = rotation[eachBlock][1] + 1
      if (!grid[oneDown] || grid[oneDown][rotation[eachBlock][0]] === 1) {
        return false
      }
    }

    return true
  }

  moveTetrimoDown(tetrimo) {
    if (this.canTetrimoMoveDown(tetrimo)) {
      this.down(tetrimo)
    } else {
      clearInterval(this.falling)

      let newGrid = this.state.grid
      let rotation = tetrimo.shape[tetrimo.rotation]

      for (let blocks = 0; blocks < rotation.length; blocks++) {
        newGrid[rotation[blocks][1]][rotation[blocks][0]] = 1
      }

      this.setState({grid: newGrid}, () => {
        this.queueTetrimos()
      })
    }
  }

  loop(tetrimo) {
    clearInterval(this.falling)
    this.falling = setInterval(() => this.moveTetrimoDown(tetrimo), 350)
  }
  // loop() {
  //   clearInterval(this.falling)
  //   this.falling = setInterval(() => this.moveTetrimoDown(this.state.tetrimo), 350)
  // }

  start() {
    this.setState({playing: true})
    this.queueTetrimos()
  }

  getTetrimo() {
    return this.state.tetrimo
  }

  render() {
    const { tetrimo } = this.state

    return (
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.topButtons}>
          <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => {
            // this.getTetrimo().then((tetrimo) => {
              this.moveTetrimoLeft(tetrimo)
            // })
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
            // this.moveTetrimoDown()
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
