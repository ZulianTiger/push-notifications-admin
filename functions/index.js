
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);


exports.sendPushNotification = functions.database
    .ref("notifications/{notificationID}")
    .onCreate(event => {
        const data = event._data;
        var newTitle = "No title";
        var newBody = "No body";

        admin.database().ref("notifications/" + data.id).once('value').then(snap => {
            newTitle = snap.val().notification_title;
            newBody = snap.val().notification_body;
        }).then(() => {
            payload = {
                notification: {
                    title: newTitle,
                    body: newBody,
                },
            };
            admin
                .messaging()
                .sendToDevice(data.notification_token, payload)
                .then(function (response) {
                    console.log("Notification sent successfully:", response);
                })
                .catch(function (error) {
                    console.log("Notification sent failed:", error);
                });
        })
    });