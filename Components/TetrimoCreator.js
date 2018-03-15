export default function createTetrimo(type) {
  let shapeL = {
    type: 'L',
    rotation: 0,
    shape: [
      [
        [4, 1],
        [5, 1],
        [6, 1],
        [6, 0]
      ],
      [
        [5, 0],
        [5, 1],
        [5, 2],
        [6, 2]
      ],
      [
        [6, 1],
        [5, 1],
        [4, 1],
        [4, 2]
      ],
      [
        [5, 2],
        [5, 1],
        [5, 0],
        [4, 0]
      ]
    ]
  }

  let shapeJ = {
    type: 'J',
    rotation: 0,
    shape: [
      [
        [4, 0],
        [4, 1],
        [5, 1],
        [6, 1]
      ],
      [
        [6, 0],
        [5, 0],
        [5, 1],
        [5, 2]
      ],
      [
        [6, 2],
        [6, 1],
        [5, 1],
        [4, 1]
      ],
      [
        [4, 2],
        [5, 2],
        [5, 1],
        [5, 0]
      ]
    ]
  }

  let shapeZ = {
    type: 'Z',
    rotation: 0,
    shape: [
      [
        [4, 0],
        [5, 0],
        [5, 1],
        [6, 1]
      ],
      [
        [6, 0],
        [6, 1],
        [5, 1],
        [5, 2]
      ],
      [
        [6, 1],
        [5, 1],
        [5, 0],
        [4, 0]
      ],
      [
        [5, 2],
        [5, 1],
        [6, 1],
        [6, 0]
      ]
    ]
  }

  let shapeS = {
    type: 'S',
    rotation: 0,
    shape: [
      [
        [6, 0],
        [5, 0],
        [5, 1],
        [4, 1]
      ],
      [
        [6, 2],
        [6, 1],
        [5, 1],
        [5, 0]
      ],
      [
        [4, 1],
        [5, 1],
        [5, 0],
        [6, 0]
      ],
      [
        [5, 0],
        [5, 1],
        [6, 1],
        [6, 2]
      ]
    ]
  }

  let shapeT = {
    type: 'T',
    rotation: 0,
    shape: [
      [
        [5, 0],
        [4, 1],
        [5, 1],
        [6, 1]
      ],
      [
        [6, 1],
        [5, 0],
        [5, 1],
        [5, 2]
      ],
      [
        [5, 2],
        [4, 1],
        [5, 1],
        [6, 1]
      ],
      [
        [4, 1],
        [5, 2],
        [5, 1],
        [5, 0]
      ]
    ]
  }

  let shapeI = {
    type: 'I',
    rotation: 0,
    shape: [
      [
        [4, 0],
        [5, 0],
        [6, 0],
        [7, 0]
      ],
      [
        [5, 0],
        [5, 1],
        [5, 2],
        [5, 3]
      ],
      [
        [4, 0],
        [5, 0],
        [6, 0],
        [7, 0]
      ],
      [
        [5, 0],
        [5, 1],
        [5, 2],
        [5, 3]
      ]
    ]
  }

  let shapeO = {
    type: 'O',
    rotation: 0,
    shape: [
      [
        [5, 0],
        [6, 0],
        [5, 1],
        [6, 1]
      ],
      [
        [5, 0],
        [6, 0],
        [5, 1],
        [6, 1]
      ],
      [
        [5, 0],
        [6, 0],
        [5, 1],
        [6, 1]
      ],
      [
        [5, 0],
        [6, 0],
        [5, 1],
        [6, 1]
      ]
    ]
  }

  if (type === 'T') {
    return shapeT
  } else if (type === 'L') {
    return shapeL
  } else if (type === 'Z') {
    return shapeZ
  } else if (type === 'S') {
    return shapeS
  } else if (type === 'J') {
    return shapeJ
  } else if (type === 'I') {
    return shapeI
  } else if (type === 'O') {
    return shapeO
  }
}
