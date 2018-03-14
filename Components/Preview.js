import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Space, createTetrimo } from '../Components'


export default class Preview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: []
    }

    this.type = props.type
    this.emptyGrid = []
    this.grid = []
    this.styleEmpty = {backgroundColor: '#ffffff'}
    this.styleFull = {backgroundColor: '#777777', borderStyle: 'solid', borderWidth: 2}
  }

  componentDidMount() {
    this.buildGrid()
  }

  componentWillReceiveProps(props) {
    this.grid = this.emptyGrid
    let tetrimo = createTetrimo(props.type)
    let current = tetrimo.shape[0]

    for (let i = 0; i < current.length; i++) {
      this.grid[current[i][1]][current[i][0]] = 2
    }
  }

  buildGrid() {
    let row = []

    for (var height = 0; height < 4; height++) {
      for (var width = 0; width < 4; width++) {
        let space = 0
        row.push(space)
      }
      this.emptyGrid.push(row)
      row = []
    }

    this.setState({grid: this.emptyGrid}, () => {

    })
  }

  renderPreview() {
    return (
      <View style={ styles.container }>
        {
          this.emptyGrid && this.grid.map((row, y) => {
            return (
              <View key={y} style={{flexDirection: 'row'}}>
              {
                row.map((cell, x) => {
                  return (
                    cell === 0
                      ? <View key={`${x}, ${y}`} style={ styles.littleSpace } />
                      : <View key={`${x}, ${y}`} style={ [styles.littleSpace, this.styleFull] } />
                      // ? <Space key={`${x}, ${y}`} coords={[x, y]} style={ this.styleEmpty } />
                      // : <Space key={`${x}, ${y}`} coords={[x, y]} style={ this.styleFull } />
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
      // <View style={ styles.container }>
      //   {
      //     this.grid && this.grid.map((row, y) => {
      //       return (
      //         <View key={y} style={{flexDirection: 'row'}}>
      //         {
      //           row.map((cell, x) => {
      //             return (
      //               cell === 0
      //                 ? <View key={`${x}, ${y}`} style={ styles.littleSpace } />
      //                 : <View key={`${x}, ${y}`} style={ [styles.littleSpace, this.styleFull] } />
      //                 // ? <Space key={`${x}, ${y}`} coords={[x, y]} style={ this.styleEmpty } />
      //                 // : <Space key={`${x}, ${y}`} coords={[x, y]} style={ this.styleFull } />
      //             )
      //           })
      //         }
      //         </View>
      //       )
      //     })
      //   }
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'absolute',
    // backgroundColor: '#ffffff',
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
