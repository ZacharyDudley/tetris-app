import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Space } from '../Components'


export default class Tetrimo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      shape: props.shape,
      rotation: props.rotation
    }
  }

  componentDidMount() {
    this.buildTetrimoGrid()
  }

  buildTetrimoGrid() {
    let row = []
    let grid = []

    for (let height = 0; height < 4; height++) {
      for (let width = 0; width < 4; width++) {
        let cell = 0
        row.push(cell)
      }
      grid.push(row)
      row = []
    }

    this.tetrimo(grid)
  }

  tetrimo(grid) {
    const { shape, rotation } = this.state

    if (shape === 'L') {
      if (rotation === 0) {
        grid[1][1] = 1
        grid[2][1] = 1
        grid[3][1] = 1
        grid[3][2] = 1
      } else if (rotation === 1) {
        grid[3][0] = 1
        grid[2][0] = 1
        grid[2][1] = 1
        grid[2][2] = 1
      } else if (rotation === 2) {
        grid[1][0] = 1
        grid[1][1] = 1
        grid[2][1] = 1
        grid[3][1] = 1
      } else if (rotation === 3) {
        grid[1][2] = 1
        grid[2][2] = 1
        grid[2][1] = 1
        grid[2][0] = 1
      }
    }

    // let shapeL = [
    //   [
    //     [1][1] = 1,
    //     [2][1] = 1,
    //     [3][1] = 1,
    //     [3][2] = 1
    //   ],
    //   [
    //     [3][0] = 1,
    //     [2][0] = 1,
    //     [2][1] = 1,
    //     [2][2] = 1
    //   ],
    //   [
    //     [1][0] = 1,
    //     [1][1] = 1,
    //     [2][1] = 1,
    //     [3][1] = 1
    //   ],
    //   [
    //     [1][2] = 1,
    //     [2][2] = 1,
    //     [2][1] = 1,
    //     [2][0] = 1
    //   ]
    // ]

    // let shapeJ = [
    //   [
    //     [][] = 1,
    //     [][] = 1,
    //     [][] = 1,
    //     [][] = 1
    //   ],
    //   [],
    //   [],
    //   []
    // ]

    // let shapeZ = [
    //   [],
    //   [],
    //   [],
    //   []
    // ]

    // let shapeS = [
    //   [],
    //   [],
    //   [],
    //   []
    // ]

    // let shapeI = [
    //   [],
    //   [],
    //   [],
    //   []
    // ]

    // let shapeT = [
    //   [],
    //   [],
    //   [],
    //   []
    // ]

    // let shapeO = [
    //   [],
    //   [],
    //   [],
    //   []
    // ]

    this.setState({grid})
  }

  renderTetrimoGrid() {
    return this.state.grid.map((row, i) => {
      return (
        <View key={i} style={{flexDirection: 'row'}}>
        {
          row.map((cell, j) => {
            return (
              cell === 1 ? <Space open={false} coords={[j, i]} /> : <Space open={true} coords={[j, i]} />
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
        { this.renderTetrimoGrid() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  open: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  full: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    backgroundColor: '#777777',
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid'
  },
})
