import { useEffect, useRef } from 'react';
import { db } from '../firebase';
import { collection, query, where, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

const AdminNotificationListener = () => {
  const mountTime = useRef(new Date());

  useEffect(() => {
    const q = query(collection(db, 'alerts'), where("severity", "==", "High"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        if (change.type === "added") {
          const newAlert = change.doc.data();

          if (newAlert.timestamp) {
            const alertTime = newAlert.timestamp.toDate();

            if (alertTime > mountTime.current) {
              console.log("NEW High-severity alert detected since page load!", newAlert);

              alert(`SIMULATING SMS NOTIFICATION:\n\nNew High-Severity Alert:\n${newAlert.type} in ${newAlert.location}`);

              const notificationPayload = {
                message: `Simulated SMS sent for high-severity alert: ${newAlert.type} in ${newAlert.location}`,
                timestamp: serverTimestamp(),
              };
              await addDoc(collection(db, "simulated_notifications"), notificationPayload);
            }
          }
        }
      });
    });

    return () => unsubscribe();
  }, []);

  return null;
};

export default AdminNotificationListener;