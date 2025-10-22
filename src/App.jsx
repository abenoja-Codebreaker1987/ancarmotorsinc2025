// src/App.jsx
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Nav from './static/components/Nav';
import HomeNav from './static/components/HomePage/HomeNav';
import InventoryNav from './static/components/NewInventory/InventoryNav';
import BrandAvailableNav from './static/components/BrandAvailable/BrandAvailableNav';
import FaqContentNav from './static/components/FAQ/FaqContentNav';
import ScrollToTop from './static/components/ScrollToTop';
import TermsAndConditionNav from './static/components/TermsAndCondition/TermsAndConditionNav';
import Branches from './static/components/Branches/Branches';

function App() {
  useEffect(() => {
    const fetchWebCollectionData = async () => {
      try {
        // Get local IP address using WebRTC
        const getLocalIpAddress = () => {
          return new Promise((resolve, reject) => {
            const rtc = new RTCPeerConnection({ iceServers: [] });
            rtc.createDataChannel('');
            rtc.createOffer().then((offer) => rtc.setLocalDescription(offer));
            rtc.onicecandidate = (event) => {
              if (event.candidate) {
                const ip = event.candidate.candidate.split(' ')[4];
                if (ip) {
                  resolve(ip);
                  rtc.close();
                }
              }
            };
            setTimeout(() => reject(new Error('Timeout getting IP')), 5000);
          });
        };

        // Get location data
        const locationResponse = await fetch('get.geojs.io/v1/ip/geo.json');
        const locationData = await locationResponse.json();

        // Get local IP
        const localIp = await getLocalIpAddress();

        console.log('Local IP:', localIp);
        console.log('Location data:', locationData);

        // Commented out for local development to avoid unwanted requests
        /*
        await fetch('script.google.com/macros/s/AKfycbyanHxL6_P8CA-icg1Lo3OHeiD4C7U4bV0k2IkzXqzX0r83A-3LLCnPylWHiartmqyt/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            localIp: localIp,
            location: locationData,
          }),
        });
        */
      } catch (error) {
        console.error('Error collecting IP/location data:', error);
      }
    };

    fetchWebCollectionData();
  }, []);

  return (
    <div className="App">
      <Nav />
      <ScrollToTop />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomeNav />} />
          <Route path="/homeNav" element={<HomeNav />} />
          <Route path="/inventoryNav" element={<InventoryNav />} />
          <Route path="/BrandAvailableNav" element={<BrandAvailableNav />} />
          <Route path="/Branches" element={<Branches />} />
          <Route path="/FaqContentNav" element={<FaqContentNav />} />
          <Route path="/TermsAndConditionNav" element={<TermsAndConditionNav />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
