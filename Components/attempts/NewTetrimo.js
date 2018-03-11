export default function NewTetrimo() {
  this.originX = 4
  this.originY = 3
  this.shape = [
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3]
  ]
  this.type = ''
  this.id = null
  this.shapeRotation = []
  this.rotationIndex = 0
  this.currentOrientation = []

  // return this.shape
  // let shapeJ = [
  //   [
  //     [this.originY + 1][this.originX - 1],
  //     [this.originY][this.originX - 1],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX + 1]
  //   ],
  //   [
  //     [this.originY + 1][this.originX + 1],
  //     [this.originY + 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY - 1][this.originX]
  //   ],
  //   [
  //     [this.originY - 1][this.originX + 1],
  //     [this.originY][this.originX + 1],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX - 1]
  //   ],
  //   [
  //     [this.originY - 1][this.originX - 1],
  //     [this.originY - 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY + 1][this.originX]
  //   ]
  // ]

  // let shapeL = [
  //   [
  //     [this.originY - 1][this.originX + 1],
  //     [this.originY - 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY + 1][this.originX]
  //   ],
  //   [
  //     [this.originY - 1][this.originX - 1],
  //     [this.originY][this.originX - 1],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX + 1]
  //   ],
  //   [
  //     [this.originY + 1][this.originX - 1],
  //     [this.originY + 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY - 1][this.originX]
  //   ],
  //   [
  //     [this.originY + 1][this.originX + 1],
  //     [this.originY][this.originX + 1],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX - 1]
  //   ]
  // ]

  // let shapeZ = [
  //   [
  //     [this.originY + 1][this.originX - 1],
  //     [this.originY + 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX + 1]
  //   ],
  //   [
  //     [this.originY + 1][this.originX + 1],
  //     [this.originY][this.originX + 1],
  //     [this.originY][this.originX],
  //     [this.originY - 1][this.originX]
  //   ],
  //   [
  //     [this.originY - 1][this.originX + 1],
  //     [this.originY - 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX - 1]
  //   ],
  //   [
  //     [this.originY - 1][this.originX - 1],
  //     [this.originY][this.originX - 1],
  //     [this.originY][this.originX],
  //     [this.originY + 1][this.originX]
  //   ]
  // ]

  // let shapeS = [
  //   [
  //     [this.originY + 1][this.originX + 1],
  //     [this.originY + 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX - 1]
  //   ],
  //   [
  //     [this.originY - 1][this.originX + 1],
  //     [this.originY][this.originX + 1],
  //     [this.originY][this.originX],
  //     [this.originY + 1][this.originX]
  //   ],
  //   [
  //     [this.originY - 1][this.originX - 1],
  //     [this.originY - 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX + 1]
  //   ],
  //   [
  //     [this.originY + 1][this.originX - 1],
  //     [this.originY][this.originX - 1],
  //     [this.originY][this.originX],
  //     [this.originY - 1][this.originX]
  //   ]
  // ]

  // let shapeT = [
  //   [
  //     [this.originY][this.originX - 1],
  //     [this.originY - 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX + 1]
  //   ],
  //   [
  //     [this.originY + 1][this.originX],
  //     [this.originY][this.originX - 1],
  //     [this.originY][this.originX],
  //     [this.originY - 1][this.originX]
  //   ],
  //   [
  //     [this.originY][this.originX + 1],
  //     [this.originY + 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX - 1]
  //   ],
  //   [
  //     [this.originY - 1][this.originX],
  //     [this.originY][this.originX + 1],
  //     [this.originY][this.originX],
  //     [this.originY + 1][this.originX]
  //   ]
  // ]

  // let shapeI = [
  //   [
  //     [this.originY + 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY - 1][this.originX],
  //     [this.originY - 2][this.originX]
  //   ],
  //   [
  //     [this.originY][this.originX + 1],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX - 1],
  //     [this.originY][this.originX - 2]
  //   ],
  //   [
  //     [this.originY - 1][this.originX],
  //     [this.originY][this.originX],
  //     [this.originY + 1][this.originX],
  //     [this.originY + 2][this.originX]
  //   ],
  //   [
  //     [this.originY][this.originX - 1],
  //     [this.originY][this.originX],
  //     [this.originY][this.originX + 1],
  //     [this.originY][this.originX + 2]
  //   ]
  // ]

  // let shapeO = [
  //   [
  //     [this.originY][this.originX],
  //     [this.originY][this.originX + 1],
  //     [this.originY + 1][this.originX],
  //     [this.originY + 1][this.originX + 1]
  //   ],
  //   [
  //     [this.originY][this.originX],
  //     [this.originY][this.originX + 1],
  //     [this.originY + 1][this.originX],
  //     [this.originY + 1][this.originX + 1]
  //   ],
  //   [
  //     [this.originY][this.originX],
  //     [this.originY][this.originX + 1],
  //     [this.originY + 1][this.originX],
  //     [this.originY + 1][this.originX + 1]
  //   ],
  //   [
  //     [this.originY][this.originX],
  //     [this.originY][this.originX + 1],
  //     [this.originY + 1][this.originX],
  //     [this.originY + 1][this.originX + 1]
  //   ]
  // ]

  // if (this.type === 'J') {
  //   this.shapeRotation = shapeJ
  // } else if (this.type === 'L') {
  //   this.shapeRotation = shapeL
  // } else if (this.type === 'Z') {
  //   this.shapeRotation = shapeZ
  // } else if (this.type === 'S') {
  //   this.shapeRotation = shapeS
  // } else if (this.type === 'T') {
  //   this.shapeRotation = shapeT
  // } else if (this.type === 'I') {
  //   this.shapeRotation = shapeI
  // } else if (this.type === 'O') {
  //   this.shapeRotation = shapeO
  // }

  // this.currentOrientation = this.shapeRotation[this.rotationIndex]
}

NewTetrimo.prototype.setOrigin = function(xCoord, yCoord) {
  this.originX = xCoord
  this.originY = yCoord
}

NewTetrimo.prototype.rotate = function() {
  if (this.rotationIndex >= 3 || this.rotationIndex < 0) {
    this.rotationIndex = 0
  } else {
    this.rotationIndex = this.rotationIndex++
  }

  this.currentOrientation = this.shapeRotation[this.rotationIndex]
}


NewTetrimo.prototype.buildTetrimo = function(id, type) {
  let shapeJ = [
    [
      [this.originY + 1][this.originX - 1],
      [this.originY][this.originX - 1],
      [this.originY][this.originX],
      [this.originY][this.originX + 1]
    ],
    [
      [this.originY + 1][this.originX + 1],
      [this.originY + 1][this.originX],
      [this.originY][this.originX],
      [this.originY - 1][this.originX]
    ],
    [
      [this.originY - 1][this.originX + 1],
      [this.originY][this.originX + 1],
      [this.originY][this.originX],
      [this.originY][this.originX - 1]
    ],
    [
      [this.originY - 1][this.originX - 1],
      [this.originY - 1][this.originX],
      [this.originY][this.originX],
      [this.originY + 1][this.originX]
    ]
  ]

  let shapeL = [
    [
      [this.originY - 1][this.originX + 1],
      [this.originY - 1][this.originX],
      [this.originY][this.originX],
      [this.originY + 1][this.originX]
    ],
    [
      [this.originY - 1][this.originX - 1],
      [this.originY][this.originX - 1],
      [this.originY][this.originX],
      [this.originY][this.originX + 1]
    ],
    [
      [this.originY + 1][this.originX - 1],
      [this.originY + 1][this.originX],
      [this.originY][this.originX],
      [this.originY - 1][this.originX]
    ],
    [
      [this.originY + 1][this.originX + 1],
      [this.originY][this.originX + 1],
      [this.originY][this.originX],
      [this.originY][this.originX - 1]
    ]
  ]

  let shapeZ = [
    [
      [this.originY + 1][this.originX - 1],
      [this.originY + 1][this.originX],
      [this.originY][this.originX],
      [this.originY][this.originX + 1]
    ],
    [
      [this.originY + 1][this.originX + 1],
      [this.originY][this.originX + 1],
      [this.originY][this.originX],
      [this.originY - 1][this.originX]
    ],
    [
      [this.originY - 1][this.originX + 1],
      [this.originY - 1][this.originX],
      [this.originY][this.originX],
      [this.originY][this.originX - 1]
    ],
    [
      [this.originY - 1][this.originX - 1],
      [this.originY][this.originX - 1],
      [this.originY][this.originX],
      [this.originY + 1][this.originX]
    ]
  ]

  let shapeS = [
    [
      [this.originY + 1][this.originX + 1],
      [this.originY + 1][this.originX],
      [this.originY][this.originX],
      [this.originY][this.originX - 1]
    ],
    [
      [this.originY - 1][this.originX + 1],
      [this.originY][this.originX + 1],
      [this.originY][this.originX],
      [this.originY + 1][this.originX]
    ],
    [
      [this.originY - 1][this.originX - 1],
      [this.originY - 1][this.originX],
      [this.originY][this.originX],
      [this.originY][this.originX + 1]
    ],
    [
      [this.originY + 1][this.originX - 1],
      [this.originY][this.originX - 1],
      [this.originY][this.originX],
      [this.originY - 1][this.originX]
    ]
  ]

  let shapeT = [
    [
      [this.originY][this.originX - 1],
      [this.originY - 1][this.originX],
      [this.originY][this.originX],
      [this.originY][this.originX + 1]
    ],
    [
      [this.originY + 1][this.originX],
      [this.originY][this.originX - 1],
      [this.originY][this.originX],
      [this.originY - 1][this.originX]
    ],
    [
      [this.originY][this.originX + 1],
      [this.originY + 1][this.originX],
      [this.originY][this.originX],
      [this.originY][this.originX - 1]
    ],
    [
      [this.originY - 1][this.originX],
      [this.originY][this.originX + 1],
      [this.originY][this.originX],
      [this.originY + 1][this.originX]
    ]
  ]

  let shapeI = [
    [
      [this.originY + 1][this.originX],
      [this.originY][this.originX],
      [this.originY - 1][this.originX],
      [this.originY - 2][this.originX]
    ],
    [
      [this.originY][this.originX + 1],
      [this.originY][this.originX],
      [this.originY][this.originX - 1],
      [this.originY][this.originX - 2]
    ],
    [
      [this.originY - 1][this.originX],
      [this.originY][this.originX],
      [this.originY + 1][this.originX],
      [this.originY + 2][this.originX]
    ],
    [
      [this.originY][this.originX - 1],
      [this.originY][this.originX],
      [this.originY][this.originX + 1],
      [this.originY][this.originX + 2]
    ]
  ]

  let shapeO = [
    [
      [this.originY][this.originX],
      [this.originY][this.originX + 1],
      [this.originY + 1][this.originX],
      [this.originY + 1][this.originX + 1]
    ],
    [
      [this.originY][this.originX],
      [this.originY][this.originX + 1],
      [this.originY + 1][this.originX],
      [this.originY + 1][this.originX + 1]
    ],
    [
      [this.originY][this.originX],
      [this.originY][this.originX + 1],
      [this.originY + 1][this.originX],
      [this.originY + 1][this.originX + 1]
    ],
    [
      [this.originY][this.originX],
      [this.originY][this.originX + 1],
      [this.originY + 1][this.originX],
      [this.originY + 1][this.originX + 1]
    ]
  ]

  if (type === 'J') {
    this.shapeRotation = shapeJ
  } else if (type === 'L') {
    this.shapeRotation = shapeL
  } else if (type === 'Z') {
    this.shapeRotation = shapeZ
  } else if (type === 'S') {
    this.shapeRotation = shapeS
  } else if (type === 'T') {
    this.shapeRotation = shapeT
  } else if (type === 'I') {
    this.shapeRotation = shapeI
  } else if (type === 'O') {
    this.shapeRotation = shapeO
  }

  this.currentOrientation = this.shapeRotation[this.rotationIndex]

  return this.shapeRotation
}




// export var Tetrimo = {
//   originX: 4,
//   originY: 2,
//   type: [],
//   id: 0,
//   shapeRotation: [],
//   rotationIndex: 0,
//   currentOrientation: [],

//   buildTetrimo(id, type) {
//     this.id = id

//     let shapeJ = [
//       [
//         [this.originY + 1][this.originX - 1],
//         [this.originY][this.originX - 1],
//         [this.originY][this.originX],
//         [this.originY][this.originX + 1]
//       ],
//       [
//         [this.originY + 1][this.originX + 1],
//         [this.originY + 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY - 1][this.originX]
//       ],
//       [
//         [this.originY - 1][this.originX + 1],
//         [this.originY][this.originX + 1],
//         [this.originY][this.originX],
//         [this.originY][this.originX - 1]
//       ],
//       [
//         [this.originY - 1][this.originX - 1],
//         [this.originY - 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY + 1][this.originX]
//       ]
//     ]

//     let shapeL = [
//       [
//         [this.originY - 1][this.originX + 1],
//         [this.originY - 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY + 1][this.originX]
//       ],
//       [
//         [this.originY - 1][this.originX - 1],
//         [this.originY][this.originX - 1],
//         [this.originY][this.originX],
//         [this.originY][this.originX + 1]
//       ],
//       [
//         [this.originY + 1][this.originX - 1],
//         [this.originY + 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY - 1][this.originX]
//       ],
//       [
//         [this.originY + 1][this.originX + 1],
//         [this.originY][this.originX + 1],
//         [this.originY][this.originX],
//         [this.originY][this.originX - 1]
//       ]
//     ]

//     let shapeZ = [
//       [
//         [this.originY + 1][this.originX - 1],
//         [this.originY + 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY][this.originX + 1]
//       ],
//       [
//         [this.originY + 1][this.originX + 1],
//         [this.originY][this.originX + 1],
//         [this.originY][this.originX],
//         [this.originY - 1][this.originX]
//       ],
//       [
//         [this.originY - 1][this.originX + 1],
//         [this.originY - 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY][this.originX - 1]
//       ],
//       [
//         [this.originY - 1][this.originX - 1],
//         [this.originY][this.originX - 1],
//         [this.originY][this.originX],
//         [this.originY + 1][this.originX]
//       ]
//     ]

//     let shapeS = [
//       [
//         [this.originY + 1][this.originX + 1],
//         [this.originY + 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY][this.originX - 1]
//       ],
//       [
//         [this.originY - 1][this.originX + 1],
//         [this.originY][this.originX + 1],
//         [this.originY][this.originX],
//         [this.originY + 1][this.originX]
//       ],
//       [
//         [this.originY - 1][this.originX - 1],
//         [this.originY - 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY][this.originX + 1]
//       ],
//       [
//         [this.originY + 1][this.originX - 1],
//         [this.originY][this.originX - 1],
//         [this.originY][this.originX],
//         [this.originY - 1][this.originX]
//       ]
//     ]

//     let shapeT = [
//       [
//         [this.originY][this.originX - 1],
//         [this.originY - 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY][this.originX + 1]
//       ],
//       [
//         [this.originY + 1][this.originX],
//         [this.originY][this.originX - 1],
//         [this.originY][this.originX],
//         [this.originY - 1][this.originX]
//       ],
//       [
//         [this.originY][this.originX + 1],
//         [this.originY + 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY][this.originX - 1]
//       ],
//       [
//         [this.originY - 1][this.originX],
//         [this.originY][this.originX + 1],
//         [this.originY][this.originX],
//         [this.originY + 1][this.originX]
//       ]
//     ]

//     let shapeI = [
//       [
//         [this.originY + 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY - 1][this.originX],
//         [this.originY - 2][this.originX]
//       ],
//       [
//         [this.originY][this.originX + 1],
//         [this.originY][this.originX],
//         [this.originY][this.originX - 1],
//         [this.originY][this.originX - 2]
//       ],
//       [
//         [this.originY - 1][this.originX],
//         [this.originY][this.originX],
//         [this.originY + 1][this.originX],
//         [this.originY + 2][this.originX]
//       ],
//       [
//         [this.originY][this.originX - 1],
//         [this.originY][this.originX],
//         [this.originY][this.originX + 1],
//         [this.originY][this.originX + 2]
//       ]
//     ]

//     let shapeO = [
//       [
//         [this.originY][this.originX],
//         [this.originY][this.originX + 1],
//         [this.originY + 1][this.originX],
//         [this.originY + 1][this.originX + 1]
//       ],
//       [
//         [this.originY][this.originX],
//         [this.originY][this.originX + 1],
//         [this.originY + 1][this.originX],
//         [this.originY + 1][this.originX + 1]
//       ],
//       [
//         [this.originY][this.originX],
//         [this.originY][this.originX + 1],
//         [this.originY + 1][this.originX],
//         [this.originY + 1][this.originX + 1]
//       ],
//       [
//         [this.originY][this.originX],
//         [this.originY][this.originX + 1],
//         [this.originY + 1][this.originX],
//         [this.originY + 1][this.originX + 1]
//       ]
//     ]

//     if (type === 'J') {
//       this.shapeRotation = shapeJ
//     } else if (type === 'L') {
//       this.shapeRotation = shapeL
//     } else if (type === 'Z') {
//       this.shapeRotation = shapeZ
//     } else if (type === 'S') {
//       this.shapeRotation = shapeS
//     } else if (type === 'T') {
//       this.shapeRotation = shapeT
//     } else if (type === 'I') {
//       this.shapeRotation = shapeI
//     } else if (type === 'O') {
//       this.shapeRotation = shapeO
//     }

//     this.currentOrientation = this.shapeRotation[this.rotationIndex]
//   },

//   rotate() {
//     if (this.rotationIndex >= 3 || this.rotationIndex < 0) {
//       this.rotationIndex = 0
//     } else {
//       this.rotationIndex = this.rotationIndex++
//     }
//   }
// }





// import React, { Component } from 'react'
// import { StyleSheet, View } from 'react-native'
// import { Space } from '../Components'


// export default class NewTetrimo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       grid: [],
//       originX: props.xCoord,
//       originY: props.yCoord,
//       type: props.type,
//       id: props.id,
//       shapeRotation: [],
//       rotationIndex: 0,
//       currentOrientation: []
//     }

//     this.styleEmpty = {backgroundColor: '#ffffff'}
//     this.styleFull = {backgroundColor: '#777777', borderStyle: 'solid', borderWidth: 2}
//   }

//   componentDidMount() {
//     this.buildTetrimoGrid()
//     this.setTetrimoShape()
//   }

//   buildTetrimoGrid() {
//     let row = []
//     let grid = []

//     for (let height = 0; height < 4; height++) {
//       for (let width = 0; width < 4; width++) {
//         let cell = 0
//         row.push(cell)
//       }
//       grid.push(row)
//       row = []
//     }

//     this.tetrimo(grid)
//   }

//   setTetrimoShape() {
//     let { type, originX, originY } = this.state

//     let shapeJ = [
//       [
//         [originY + 1][originX - 1],
//         [originY][originX - 1],
//         [originY][originX],
//         [originY][originX + 1]
//       ],
//       [
//         [originY + 1][originX + 1],
//         [originY + 1][originX],
//         [originY][originX],
//         [originY - 1][originX]
//       ],
//       [
//         [originY - 1][originX + 1],
//         [originY][originX + 1],
//         [originY][originX],
//         [originY][originX - 1]
//       ],
//       [
//         [originY - 1][originX - 1],
//         [originY - 1][originX],
//         [originY][originX],
//         [originY + 1][originX]
//       ]
//     ]

//     let shapeL = [
//       [
//         [originY - 1][originX + 1],
//         [originY - 1][originX],
//         [originY][originX],
//         [originY + 1][originX]
//       ],
//       [
//         [originY - 1][originX - 1],
//         [originY][originX - 1],
//         [originY][originX],
//         [originY][originX + 1]
//       ],
//       [
//         [originY + 1][originX - 1],
//         [originY + 1][originX],
//         [originY][originX],
//         [originY - 1][originX]
//       ],
//       [
//         [originY + 1][originX + 1],
//         [originY][originX + 1],
//         [originY][originX],
//         [originY][originX - 1]
//       ]
//     ]

//     let shapeZ = [
//       [
//         [originY + 1][originX - 1],
//         [originY + 1][originX],
//         [originY][originX],
//         [originY][originX + 1]
//       ],
//       [
//         [originY + 1][originX + 1],
//         [originY][originX + 1],
//         [originY][originX],
//         [originY - 1][originX]
//       ],
//       [
//         [originY - 1][originX + 1],
//         [originY - 1][originX],
//         [originY][originX],
//         [originY][originX - 1]
//       ],
//       [
//         [originY - 1][originX - 1],
//         [originY][originX - 1],
//         [originY][originX],
//         [originY + 1][originX]
//       ]
//     ]

//     let shapeS = [
//       [
//         [originY + 1][originX + 1],
//         [originY + 1][originX],
//         [originY][originX],
//         [originY][originX - 1]
//       ],
//       [
//         [originY - 1][originX + 1],
//         [originY][originX + 1],
//         [originY][originX],
//         [originY + 1][originX]
//       ],
//       [
//         [originY - 1][originX - 1],
//         [originY - 1][originX],
//         [originY][originX],
//         [originY][originX + 1]
//       ],
//       [
//         [originY + 1][originX - 1],
//         [originY][originX - 1],
//         [originY][originX],
//         [originY - 1][originX]
//       ]
//     ]

//     let shapeT = [
//       [
//         [originY][originX - 1],
//         [originY - 1][originX],
//         [originY][originX],
//         [originY][originX + 1]
//       ],
//       [
//         [originY + 1][originX],
//         [originY][originX - 1],
//         [originY][originX],
//         [originY - 1][originX]
//       ],
//       [
//         [originY][originX + 1],
//         [originY + 1][originX],
//         [originY][originX],
//         [originY][originX - 1]
//       ],
//       [
//         [originY - 1][originX],
//         [originY][originX + 1],
//         [originY][originX],
//         [originY + 1][originX]
//       ]
//     ]

//     let shapeI = [
//       [
//         [originY + 1][originX],
//         [originY][originX],
//         [originY - 1][originX],
//         [originY - 2][originX]
//       ],
//       [
//         [originY][originX + 1],
//         [originY][originX],
//         [originY][originX - 1],
//         [originY][originX - 2]
//       ],
//       [
//         [originY - 1][originX],
//         [originY][originX],
//         [originY + 1][originX],
//         [originY + 2][originX]
//       ],
//       [
//         [originY][originX - 1],
//         [originY][originX],
//         [originY][originX + 1],
//         [originY][originX + 2]
//       ]
//     ]

//     let shapeO = [
//       [
//         [originY][originX],
//         [originY][originX + 1],
//         [originY + 1][originX],
//         [originY + 1][originX + 1]
//       ],
//       [
//         [originY][originX],
//         [originY][originX + 1],
//         [originY + 1][originX],
//         [originY + 1][originX + 1]
//       ],
//       [
//         [originY][originX],
//         [originY][originX + 1],
//         [originY + 1][originX],
//         [originY + 1][originX + 1]
//       ],
//       [
//         [originY][originX],
//         [originY][originX + 1],
//         [originY + 1][originX],
//         [originY + 1][originX + 1]
//       ]
//     ]

//     if (type === 'J') {
//       this.setState({shapeRotation: shapeJ})
//     } else if (type === 'L') {
//       this.setState({shapeRotation: shapeL})
//     } else if (type === 'Z') {
//       this.setState({shapeRotation: shapeZ})
//     } else if (type === 'S') {
//       this.setState({shapeRotation: shapeS})
//     } else if (type === 'T') {
//       this.setState({shapeRotation: shapeT})
//     } else if (type === 'I') {
//       this.setState({shapeRotation: shapeI})
//     } else if (type === 'O') {
//       this.setState({shapeRotation: shapeO})
//     }

//     this.setState({ currentOrientation: this.state.shapeRotation[this.state.rotationIndex] })
//   }

//   rotateTetrimo() {
//     if (this.state.rotationIndex >= 3) {
//       this.setState({rotationIndex: 0})
//     } else {
//       this.setState({rotationIndex: this.state.rotationIndex++})
//     }
//   }

//   renderTetrimoGrid() {
//     return this.state.grid.map((row, y) => {
//       return (
//         <View key={y} style={{flexDirection: 'row'}}>
//         {
//           row.map((cell, x) => {
//             return (
//               //Key is for each square in tetrimo - not shape as whole
//               cell === 1 ? <Space key={this.state.id} style={ this.styleFull } /> : <Space key={this.state.id} style={ this.styleEmpty } />
//             )
//           })
//         }
//         </View>
//       )
//     })
//   }

//   render() {
//     return (
//       <View style={ styles.container }>
//         { this.renderTetrimoGrid() }
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
