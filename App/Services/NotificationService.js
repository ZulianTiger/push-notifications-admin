import { db } from '../Config/db';

export default {

    addNotification: (notification_token, notification_title, notification_body) => {
        var id = db.ref('notifications').push().key;
        notificationRef = db.ref('notifications/' + id);
        notificationRef
            .set({
                id: id,
                notification_token: notification_token,
                notification_title: notification_title,
                notification_body: notification_body,
                time: new Date(Date.now()).toLocaleString(),
            });
    },

};
