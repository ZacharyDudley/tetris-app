import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.textContainer}>
      {
        <Text>brought to you by:</Text>
      }
        <Text style={styles.name}>
          ZACHARY DUDLEY FRIEDMAN
        </Text>
        <Text style={styles.site}>
          ZacharyDFriedman.herokuapp.com
        </Text>
      </View>

        <Image
          style={styles.image}
          source={require('../Signature.png')}
        />
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
  textContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: '200'
  },
  site: {
    fontWeight: '700'
  },
  image: {
    height: 300,
    resizeMode: 'contain',
    opacity: 0.3,
    marginTop: 20
  }
})
