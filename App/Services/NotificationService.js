import { db } from '../Config/db';

export default {

    addNotification: (notification_token, notification_title, notification_body) => {
        var id = db.ref('notifications').push().key;
        userRef = db.ref('notifications/' + id);
        userRef
            .set({
                id: id,
                notification_token: notification_token,
                notification_title: notification_title,
                notification_body: notification_body,
                time: new Date(Date.now()).toLocaleString(),
            });
    },

};
