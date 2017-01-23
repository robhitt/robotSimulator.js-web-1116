'use strict';

class Robot {
  constructor() {
    this.coordinates = [0, 0]
    this.curentPosition = `(${this.coordinates[0]},${this.coordinates[1]})`
    this.bearing = 'north'
  }


  at(x,y) {
    this.coordinates = [x, y]
  }

  place(obj) {
    this.coordinates = [ obj['x'] , obj['y'] ]
    this.bearing = obj['direction']
  }


  // instruction is the acronym string
  evaluate(instruction) {
    var acronym = instruction.split("")

    for (let i = 0; i < acronym.length; i++) {
      switch (acronym[i]) {
        case 'L':
          this.turnLeft()
          break;

        case 'R':

          this.turnRight()
          break;

        case 'A':
          this.advance()
          break;

        default:
          new Error('Invalid Robot Bearing')
          break;
      }
    }
  }


  instructions(instruction) {
    let acronym = instruction.split("")
    let functionArray = []

    for (let i = 0; i < acronym.length; i++) {

      switch (acronym[i]) {
        case 'L':
          functionArray.push("turnLeft")
          break;

        case 'R':
          functionArray.push("turnRight")
          break;

        case 'A':
          functionArray.push("advance")
          break;

        default:
          new Error('Invalid Robot Bearing')
          break;

      }
    }

    return functionArray
  }


  orient (direction) {
    if (direction === 'north' || direction === 'south' || direction === 'east' || direction === 'west') {
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  turnRight() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'west':
        this.bearing = 'north'
        break;
      default:
        new Error('Invalid Robot Bearing')
      break;
    }
  }


  turnLeft () {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'north'
        break;
      case 'west':
        this.bearing = 'south'
        break;
      default:
        new Error('Invalid Robot Bearing')
      break;
    }
  }

  advance () {
    switch (this.bearing) {
      case 'north':
        this.coordinates = [this.coordinates[0], this.coordinates[1] + 1]
        break;
      case 'south':
        this.coordinates = [this.coordinates[0], this.coordinates[1] - 1]
        break;
      case 'east':
        this.coordinates = [this.coordinates[0] + 1, this.coordinates[1]]
        break;
      case 'west':
        this.coordinates = [this.coordinates[0] - 1, this.coordinates[1]]
        break;
      default:
        new Error('Invalid Robot Bearing')
      break;
    }
  }
}
