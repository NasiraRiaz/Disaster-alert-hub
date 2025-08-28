const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.sendAlertNotification = functions.firestore
  .document("alerts/{alertId}")
  .onCreate(async (snap, context) => {
    const newAlert = snap.data();

    if (newAlert.severity === "High") {
      const notificationPayload = {
        message: `Simulated SMS sent for high-severity alert: ${newAlert.type} in ${newAlert.location}`,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      };

      await admin.firestore().collection("simulated_notifications").add(notificationPayload);
      
      console.log("High-severity alert detected. Simulated notification created.");
    }
    return null;
  });