import React, { useState } from 'react';

const inputStyle = {
  width: '800px', // Set the desired width here
};

const GoogleMap = () => {
  
  const [location, setLocation] = useState('Chittagong'); // Hardcoded location for testing
  const [latitude, setLatitude] = useState(0);
const [longitude, setLongitude] = useState(0);

  
  const mapUrl = `http://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;
 // const mapUrl2 = `https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, 8th Avenue, New York, NY, USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;
const mapUrl3 = `https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter a location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      /> */}
    <div style={{margin: '5px'}}>
    {/* <span>Latitude: </span><input
        type="number"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        
      />

    <span style={{paddingLeft: '5px'}}>Longitude: </span><input
        type="number"
        placeholder="Enter a location"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      /> */}
     <input
        type="text"
        placeholder="Location"
        value={location}
        style={inputStyle} 
        onChange={(e) => setLocation(e.target.value)}
        
      />
</div>
      <iframe
        title="Google Map"
        src={mapUrl3}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    
    </div>
  );
};

export default GoogleMap;
