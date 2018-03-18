import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

class Controls extends Component {
  render() {
    const { params } = this.props.navigation.state
    const score = params ? params.score : null

    return (
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <View style={styles.topButtons}>
            <View style={styles.buttonLeft}>
              <Text style={styles.text}>LEFT</Text>
            </View>

            <View style={styles.buttonRotate}>
              <Text style={styles.text}>ROTATE</Text>
            </View>

            <View style={styles.buttonRight}>
              <Text style={styles.text}>RIGHT</Text>
            </View>
          </View>

          <View style={styles.bottomButtons}>
            <View style={styles.buttonDown}>
              <Text style={styles.text}>DOWN</Text>
              <Text style={styles.text}>DOUBLE TAP TO SLAM DOWN</Text>
            </View>
          </View>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: '#0000000',
    borderWidth: 2,
    justifyContent: 'center'
  },
  buttonLeft: {
    flex: 1,
    borderColor: '#0000000',
    borderWidth: 2,
    justifyContent: 'center'
  },
  buttonRotate: {
    flex: 1.5,
    borderColor: '#0000000',
    borderWidth: 2,
    justifyContent: 'center'
  },
  buttonDown: {
    flex: 1,
    borderColor: '#0000000',
    borderWidth: 2,
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: '100',
    alignSelf: 'center',
  },
})

export default withNavigation(Controls)
