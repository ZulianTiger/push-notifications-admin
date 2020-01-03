import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import firebase from 'react-native-firebase'

import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fcmToken: '',
      notificationTitle: '',
      notificationBody: '',
    }
  }

  async componentDidMount() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      firebase
        .messaging()
        .getToken()
        .then(fcmToken => {
          if (fcmToken) {
            this.setState({ fcmToken: fcmToken });
          } else {
            alert("user doesn't have a device token yet");
          }
        });
    } else {
      //request permission ------------
      firebase.messaging().requestPermission()
        .then(() => {
          // User has authorised  
          firebase
            .messaging()
            .getToken()
            .then(fcmToken => {
              if (fcmToken) {
                //TokenService.addUser(fcmToken, "Food is ready!", "Hello user, your food is prepared and ready to be taken.");
                this.setState({ fcmToken: fcmToken });
              } else {
                alert("user doesn't have a device token yet");
              }
            });
        })
        .catch(error => {
          // User has rejected permissions  
          console.log('User has rejected push notification permission.');
        });
    }

    this.removeNotificationListener = firebase.notifications().onNotification((Notification) => {
      // Process your notification as required

      const notification = new firebase.notifications.Notification({
        sound: 'default',
        show_in_foreground: true,
      })
        .setNotificationId(Notification._notificationId)
        .setTitle(Notification._title)
        .setBody(Notification._body)
        .setData(Notification._data);

      const channel = new firebase.notifications.Android.Channel(
        'channel7',
        'Channel 7',
        firebase.notifications.Android.Importance.Max
      ).setDescription('The channel used to display notifications in foreground.');
      firebase.notifications().android.createChannel(channel);

      notification
        .android.setChannelId('channel7')
        .android.setSmallIcon('ic_launcher')
        .android.setPriority(firebase.notifications.Android.Priority.High);

      firebase.notifications()
        .displayNotification(notification)
        .catch(err => alert(err));

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromNotificationListener();
  }
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.RegularText}>
          FCM token: {this.state.fcmToken}
        </Text>

        <TextInput
          placeholder={"Notification title"}
          placeholderTextColor={"#fafafa"}
          style={styles.TextInput}
          value={this.state.notificationTitle}
          onChange={(e) => this.setState({ notificationTitle: e.nativeEvent.text })}
        />

        <TextInput
          placeholder={"Notification body text"}
          placeholderTextColor={"#fafafa"}
          style={styles.TextInput}
          value={this.state.notificationBody}
          onChange={(e) => this.setState({ notificationBody: e.nativeEvent.text })}
        />

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
