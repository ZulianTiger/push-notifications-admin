import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            
          }}
        >
          <Text style={styles.ButtonText}>
            Send Notification
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
