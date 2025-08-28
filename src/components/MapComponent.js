import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const [safeZones, setSafeZones] = useState([]);
  const [dangerZones, setDangerZones] = useState([]);
  const mapCenter = [33.6034, 73.0600];

  useEffect(() => {
    const fetchSafeZones = async () => {
      const querySnapshot = await getDocs(collection(db, 'safe_zone'));
      const zones = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.position && data.position.latitude && data.position.longitude) {
          zones.push({
            id: doc.id,
            name: data.name,
            position: [data.position.latitude, data.position.longitude],
            details: data.details || 'No additional information available.',
          });
        }
      });
      setSafeZones(zones);
    };

    const fetchDangerZones = async () => {
      const querySnapshot = await getDocs(collection(db, 'danger_zones'));
      const zones = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.center && data.center.latitude && data.center.longitude) {
          zones.push({
            id: doc.id,
            name: data.name,
            center: [data.center.latitude, data.center.longitude],
            radius: data.radius || 500,
            color: data.color || 'red',
            details: data.details || 'No additional information available.',
          });
        }
      });
      setDangerZones(zones);
    };

    fetchSafeZones();
    fetchDangerZones();
  }, []);

  return (
    <div className="map-container">
      <h2>Safety Map</h2>
      <MapContainer center={mapCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {safeZones.map(zone => (
          <Marker key={zone.id} position={zone.position}>
            <Popup>
              <b>{zone.name}</b><br />
              {zone.details}
            </Popup>
          </Marker>
        ))}

        {dangerZones.map(zone => (
          <Circle
            key={zone.id}
            center={zone.center}
            radius={zone.radius}
            pathOptions={{ color: zone.color, fillColor: zone.color, fillOpacity: 0.3 }}
          >
            <Popup>
              <b>{zone.name}</b><br />
              {zone.details}
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;