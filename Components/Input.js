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

    // this.setState({grid: grid, tetrimo: tetrimo})

    // this.setState({tetrimoQueue: queue, tetrimo: tetrimo}, () => {
    this.setState({grid: grid, tetrimoQueue: queue}, () => {
      // this.moveTetrimoDown(tetrimo)
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

  canTetrimoMoveLeft() {
    let { tetrimo, grid } = this.state
    let orientation = tetrimo.shape[tetrimo.rotation]

    for (let i = 0; i < orientation.length; i++) {
      let oneLeft = orientation[i][1] - 1
      if (!grid[orientation[i][1]][orientation[i][oneLeft]] || grid[orientation[i][1]][orientation[i][oneLeft]] === 1) {
        console.log('FALSE')
        console.log(grid[orientation[i][1]][orientation[i][oneLeft]])
        // return false
      }
    }

    // let newPositionGrid = grid
    // let newPositionTetrimo = tetrimo

    // for (let eachOrientation = 0; eachOrientation < newPositionTetrimo.shape.length; eachOrientation++) {
    //   for (let eachBlock = 0; eachBlock < newPositionTetrimo.shape[eachOrientation].length; eachBlock++) {
    //     newPositionTetrimo.shape[eachOrientation][eachBlock][0]--

    //     if (eachOrientation === tetrimo.rotation) {
    //       newPositionGrid[orientation[eachBlock][1]][orientation[eachBlock][0]] = 0
    //       // newPositionGrid[newPositionTetrimo[eachBlock][1]][newPositionTetrimo[eachBlock][0]] = 2
    //     }
    //   }

    // }

    // this.setState({grid: newPositionGrid, tetrimo: newPositionTetrimo})
    // console.log(this.state.tetrimo)
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
      // this.loop(tetrimo)
    })
  }

  canTetrimoMoveDown(tetrimo) {
    let { grid } = this.state

    let rotation = tetrimo.shape[tetrimo.rotation]

    for (let eachBlock = 0; eachBlock < rotation.length; eachBlock++) {
      let oneDown = rotation[eachBlock][1] + 1
      if (!grid[oneDown] || !grid[oneDown][rotation[eachBlock][0]] === 0 || !grid[oneDown][rotation[eachBlock][0]] === 2) {
        return false
      }
    }

    return true
  }

  moveTetrimoDown(tetrimo) {
    // if (this.canTetrimoMoveDown(tetrimo.shape[tetrimo.rotation])) {
      // this.down(tetrimo)
    if (this.canTetrimoMoveDown(tetrimo)) {
      this.down(tetrimo)
    } else {
      clearInterval(this.falling)
      this.queueTetrimos()
    }
  }

  loop(tetrimo) {
    this.falling = setInterval(() => this.moveTetrimoDown(tetrimo), 500)

    // this.moveTetrimoDown(tetrimo)
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
            console.log('LEFT')
            // this.canTetrimoMoveLeft()
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
