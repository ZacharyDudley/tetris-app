import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class Preview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: []
    }

    this.type = props.type
    this.grid = []
    this.styleEmpty = {backgroundColor: '#ffffff'}
    this.styleFull = {backgroundColor: '#777777', borderStyle: 'solid', borderWidth: 2}
  }

  componentDidMount() {
    this.buildGrid()
    this.buildTetrimo(this.type)
  }

  componentWillReceiveProps(props) {
    this.buildTetrimo(props.type)
  }

  buildTetrimo(type) {
    for (let rows = 0; rows < this.grid.length; rows++) {
      for (let cells = 0; cells < this.grid[rows].length; cells++) {
        this.grid[rows][cells] = 0
      }
    }

    let tetrimo = []

    let shapeL = [
      [0, 1],
      [1, 1],
      [2, 1],
      [2, 0]
    ]

    let shapeJ = [
      [0, 0],
      [0, 1],
      [1, 1],
      [2, 1]
    ]

    let shapeZ = [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1]
    ]

    let shapeS = [
      [2, 0],
      [1, 0],
      [1, 1],
      [0, 1]
    ]

    let shapeT = [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, 1]
    ]

    let shapeI = [
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1]
    ]

    let shapeO = [
      [2, 0],
      [2, 1],
      [1, 0],
      [1, 1]
    ]

    if (type === 'T') {
      tetrimo = shapeT
    } else if (type === 'L') {
      tetrimo = shapeL
    } else if (type === 'Z') {
      tetrimo = shapeZ
    } else if (type === 'S') {
      tetrimo = shapeS
    } else if (type === 'J') {
      tetrimo = shapeJ
    } else if (type === 'I') {
      tetrimo = shapeI
    } else if (type === 'O') {
      tetrimo = shapeO
    }

    for (let i = 0; i < tetrimo.length; i++) {
      this.grid[tetrimo[i][1]][tetrimo[i][0]] = 1
    }
  }

  buildGrid() {
    let row = []

    for (var height = 0; height < 2; height++) {
      for (var width = 0; width < 4; width++) {
        let space = 0
        row.push(space)
      }
      this.grid.push(row)
      row = []
    }

    this.setState({grid: this.grid}, () => {

    })
  }

  renderPreview() {
    return (
      <View style={ styles.container }>
        {
          this.grid && this.grid.map((row, y) => {
            return (
              <View key={y} style={{flexDirection: 'row'}}>
              {
                row.map((cell, x) => {
                  return (
                    cell === 0
                      ? <View key={`${x}, ${y}`} style={ styles.littleSpace } />
                      : <View key={`${x}, ${y}`} style={ [styles.littleSpace, this.styleFull] } />
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

  render() {
    return (
      this.renderPreview()
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  littleSpace: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 10,
    height: 10,
    borderColor: '#000000',
  },

})
