import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, GeoPoint } from 'firebase/firestore';

const EmergencyForm = () => {
  const [emergencyType, setEmergencyType] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          await addDoc(collection(db, 'user_reports'), {
            type: emergencyType,
            details: details,
            location: new GeoPoint(latitude, longitude),
            timestamp: serverTimestamp(),
          });
          alert('Emergency reported successfully! Thank you.');
          setEmergencyType('');
          setDetails('');
        } catch (error) {
          console.error("Error adding document: ", error);
          alert('Failed to submit report. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      },
      (error) => {
        console.error("Error getting location: ", error);
        alert('Could not get your location. Please enable location services and try again.');
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div className="form-container">
      <h2>Report an Emergency</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={emergencyType}
          onChange={(e) => setEmergencyType(e.target.value)}
          placeholder="Type of Emergency (e.g., Fire, Road Block)"
          required
        />
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Provide more details"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Report with My Location'}
        </button>
      </form>
    </div>
  );
};

export default EmergencyForm;