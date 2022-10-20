import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SandBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#ddd',
  },
  boxOne: {
    backgroundColor: 'violet',
  },
  boxTwo: {
    backgroundColor: 'coral',
  },
  boxThree: {
    backgroundColor: 'gold',
  },
  boxFour: {
    backgroundColor: 'skyblue',
  },
})
