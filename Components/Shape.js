export default function Shape() {
  this.originX = 4
  this.originY = 3
  this.shape = [
    [
      [this.originY + 1, this.originX - 1],
      [this.originY, this.originX - 1],
      [this.originY, this.originX],
      [this.originY, this.originX + 1]
    ],
    [
      [this.originY + 1, this.originX + 1],
      [this.originY + 1, this.originX],
      [this.originY, this.originX],
      [this.originY - 1, this.originX]
    ],
    [
      [this.originY - 1, this.originX + 1],
      [this.originY, this.originX + 1],
      [this.originY, this.originX],
      [this.originY, this.originX - 1]
    ],
    [
      [this.originY - 1, this.originX - 1],
      [this.originY - 1, this.originX],
      [this.originY, this.originX],
      [this.originY + 1, this.originX]
    ]
  ]

  return this.shape

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

// NewTetrimo.prototype.setOrigin = function(xCoord, yCoord) {
//   this.originX = xCoord
//   this.originY = yCoord
// }

// NewTetrimo.prototype.rotate = function() {
//   if (this.rotationIndex >= 3 || this.rotationIndex < 0) {
//     this.rotationIndex = 0
//   } else {
//     this.rotationIndex = this.rotationIndex++
//   }

//   this.currentOrientation = this.shapeRotation[this.rotationIndex]
// }


// NewTetrimo.prototype.buildTetrimo = function(id, type) {
//   let shapeJ = [
//     [
//       [this.originY + 1][this.originX - 1],
//       [this.originY][this.originX - 1],
//       [this.originY][this.originX],
//       [this.originY][this.originX + 1]
//     ],
//     [
//       [this.originY + 1][this.originX + 1],
//       [this.originY + 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY - 1][this.originX]
//     ],
//     [
//       [this.originY - 1][this.originX + 1],
//       [this.originY][this.originX + 1],
//       [this.originY][this.originX],
//       [this.originY][this.originX - 1]
//     ],
//     [
//       [this.originY - 1][this.originX - 1],
//       [this.originY - 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY + 1][this.originX]
//     ]
//   ]

//   let shapeL = [
//     [
//       [this.originY - 1][this.originX + 1],
//       [this.originY - 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY + 1][this.originX]
//     ],
//     [
//       [this.originY - 1][this.originX - 1],
//       [this.originY][this.originX - 1],
//       [this.originY][this.originX],
//       [this.originY][this.originX + 1]
//     ],
//     [
//       [this.originY + 1][this.originX - 1],
//       [this.originY + 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY - 1][this.originX]
//     ],
//     [
//       [this.originY + 1][this.originX + 1],
//       [this.originY][this.originX + 1],
//       [this.originY][this.originX],
//       [this.originY][this.originX - 1]
//     ]
//   ]

//   let shapeZ = [
//     [
//       [this.originY + 1][this.originX - 1],
//       [this.originY + 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY][this.originX + 1]
//     ],
//     [
//       [this.originY + 1][this.originX + 1],
//       [this.originY][this.originX + 1],
//       [this.originY][this.originX],
//       [this.originY - 1][this.originX]
//     ],
//     [
//       [this.originY - 1][this.originX + 1],
//       [this.originY - 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY][this.originX - 1]
//     ],
//     [
//       [this.originY - 1][this.originX - 1],
//       [this.originY][this.originX - 1],
//       [this.originY][this.originX],
//       [this.originY + 1][this.originX]
//     ]
//   ]

//   let shapeS = [
//     [
//       [this.originY + 1][this.originX + 1],
//       [this.originY + 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY][this.originX - 1]
//     ],
//     [
//       [this.originY - 1][this.originX + 1],
//       [this.originY][this.originX + 1],
//       [this.originY][this.originX],
//       [this.originY + 1][this.originX]
//     ],
//     [
//       [this.originY - 1][this.originX - 1],
//       [this.originY - 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY][this.originX + 1]
//     ],
//     [
//       [this.originY + 1][this.originX - 1],
//       [this.originY][this.originX - 1],
//       [this.originY][this.originX],
//       [this.originY - 1][this.originX]
//     ]
//   ]

//   let shapeT = [
//     [
//       [this.originY][this.originX - 1],
//       [this.originY - 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY][this.originX + 1]
//     ],
//     [
//       [this.originY + 1][this.originX],
//       [this.originY][this.originX - 1],
//       [this.originY][this.originX],
//       [this.originY - 1][this.originX]
//     ],
//     [
//       [this.originY][this.originX + 1],
//       [this.originY + 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY][this.originX - 1]
//     ],
//     [
//       [this.originY - 1][this.originX],
//       [this.originY][this.originX + 1],
//       [this.originY][this.originX],
//       [this.originY + 1][this.originX]
//     ]
//   ]

//   let shapeI = [
//     [
//       [this.originY + 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY - 1][this.originX],
//       [this.originY - 2][this.originX]
//     ],
//     [
//       [this.originY][this.originX + 1],
//       [this.originY][this.originX],
//       [this.originY][this.originX - 1],
//       [this.originY][this.originX - 2]
//     ],
//     [
//       [this.originY - 1][this.originX],
//       [this.originY][this.originX],
//       [this.originY + 1][this.originX],
//       [this.originY + 2][this.originX]
//     ],
//     [
//       [this.originY][this.originX - 1],
//       [this.originY][this.originX],
//       [this.originY][this.originX + 1],
//       [this.originY][this.originX + 2]
//     ]
//   ]

//   let shapeO = [
//     [
//       [this.originY][this.originX],
//       [this.originY][this.originX + 1],
//       [this.originY + 1][this.originX],
//       [this.originY + 1][this.originX + 1]
//     ],
//     [
//       [this.originY][this.originX],
//       [this.originY][this.originX + 1],
//       [this.originY + 1][this.originX],
//       [this.originY + 1][this.originX + 1]
//     ],
//     [
//       [this.originY][this.originX],
//       [this.originY][this.originX + 1],
//       [this.originY + 1][this.originX],
//       [this.originY + 1][this.originX + 1]
//     ],
//     [
//       [this.originY][this.originX],
//       [this.originY][this.originX + 1],
//       [this.originY + 1][this.originX],
//       [this.originY + 1][this.originX + 1]
//     ]
//   ]

//   if (type === 'J') {
//     this.shapeRotation = shapeJ
//   } else if (type === 'L') {
//     this.shapeRotation = shapeL
//   } else if (type === 'Z') {
//     this.shapeRotation = shapeZ
//   } else if (type === 'S') {
//     this.shapeRotation = shapeS
//   } else if (type === 'T') {
//     this.shapeRotation = shapeT
//   } else if (type === 'I') {
//     this.shapeRotation = shapeI
//   } else if (type === 'O') {
//     this.shapeRotation = shapeO
//   }

//   this.currentOrientation = this.shapeRotation[this.rotationIndex]

//   return this.shapeRotation
// }
