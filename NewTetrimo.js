let rotation =
      [
        [
          [originY + 1][originX - 1],
          [originY][originX - 1],
          [originY][originX],
          [originY][originX + 1]
        ],
        [
          [originY + 1][originX + 1],
          [originY + 1][originX],
          [originY][originX],
          [originY - 1][originX]
        ],
        [
          [originY - 1][originX + 1],
          [originY][originX + 1],
          [originY][originX],
          [originY][originX - 1]
        ],
        [
          [originY - 1][originX - 1],
          [originY - 1][originX],
          [originY][originX],
          [originY + 1][originX]
        ]
      ]

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Space } from '../Components'


export default class NewTetrimo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      originX: props.xCoord,
      originY: props.yCoord,
      shape: props.shape,
      rotation: props.rotation,
      id: props.id
    }

    this.styleEmpty = {backgroundColor: '#ffffff'}
    this.styleFull = {backgroundColor: '#777777', borderStyle: 'solid', borderWidth: 2}
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
    let { shape, rotation, originX, originY } = this.state

    let shapeJ = [
      [
        [originY + 1][originX - 1],
        [originY][originX - 1],
        [originY][originX],
        [originY][originX + 1]
      ],
      [
        [originY + 1][originX + 1],
        [originY + 1][originX],
        [originY][originX],
        [originY - 1][originX]
      ],
      [
        [originY - 1][originX + 1],
        [originY][originX + 1],
        [originY][originX],
        [originY][originX - 1]
      ],
      [
        [originY - 1][originX - 1],
        [originY - 1][originX],
        [originY][originX],
        [originY + 1][originX]
      ]
    ]

    let shapeL = [
      [
        [][],
        [][],
        [originY][originX],
        [][]
      ],
      [
        [][],
        [][],
        [originY][originX],
        [][]
      ],
      [
        [][],
        [][],
        [originY][originX],
        [][]
      ],
      [
        [][],
        [][],
        [originY][originX],
        [][]
      ]
    ]

    let shapeZ = [
      [
        [][],
        [][],
        [originY][originX],
        [][]
      ],
      [
        [][],
        [][],
        [originY][originX],
        [][]
      ],
      [
        [][],
        [][],
        [originY][originX],
        [][]
      ],
      [
        [][],
        [][],
        [originY][originX],
        [][]
      ]
    ]

    let shapeS = [
      [
        [][],
        [][],
        [][],
        [][]
      ],
      [
        [][],
        [][],
        [][],
        [][]
      ],
      [
        [][],
        [][],
        [][],
        [][]
      ],
      [
        [][],
        [][],
        [][],
        [][]
      ]
    ]

    let shapeT = [
      [
        [originY][originX - 1],
        [originY - 1][originX],
        [originY][originX],
        [originY][originX + 1]
      ],
      [
        [originY + 1][originX],
        [originY][originX - 1],
        [originY][originX],
        [originY - 1][originX]
      ],
      [
        [originY][originX + 1],
        [originY + 1][originX],
        [originY][originX],
        [originY][originX - 1]
      ],
      [
        [originY - 1][originX],
        [originY][originX + 1],
        [originY][originX],
        [originY + 1][originX]
      ]
    ]

    let shapeI = [
      [
        [originY + 1][originX],
        [originY][originX],
        [originY - 1][originX],
        [originY - 2][originX]
      ],
      [
        [originY][originX + 1],
        [originY][originX],
        [originY][originX - 1],
        [originY][originX - 2]
      ],
      [
        [originY - 1][originX],
        [originY][originX],
        [originY + 1][originX],
        [originY + 2][originX]
      ],
      [
        [originY][originX - 1],
        [originY][originX],
        [originY][originX + 1],
        [originY][originX + 2]
      ]
    ]

    let shapeO = [
      [
        [originY][originX],
        [originY][originX + 1],
        [originY + 1][originX],
        [originY + 1][originX + 1]
      ],
      [
        [originY][originX],
        [originY][originX + 1],
        [originY + 1][originX],
        [originY + 1][originX + 1]
      ],
      [
        [originY][originX],
        [originY][originX + 1],
        [originY + 1][originX],
        [originY + 1][originX + 1]
      ],
      [
        [originY][originX],
        [originY][originX + 1],
        [originY + 1][originX],
        [originY + 1][originX + 1]
      ]
    ]



    this.setState({grid})
  }

  renderTetrimoGrid() {
    return this.state.grid.map((row, y) => {
      return (
        <View key={y} style={{flexDirection: 'row'}}>
        {
          row.map((cell, x) => {
            return (
              cell === 1 ? <Space key={this.state.id} style={ this.styleFull } /> : <Space key={this.state.id} style={this.styleEmpty} />
              // cell === 1 ? <Space open={false} coords={[x, y]} /> : <Space open={true} coords={[x, y]} />
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
})
