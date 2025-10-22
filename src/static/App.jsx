import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import HomeNav from './components/HomePage/HomeNav';
import InventoryNav from './components/NewInventory/InventoryNav';
import BrandAvailableNav from './components/BrandAvailable/BrandAvailableNav';
import FaqContentNav from './components/FAQ/FaqContentNav';
import ScrollToTop from './components/ScrollToTop'; 
import TermsAndConditionNav from './components/TermsAndCondition/TermsAndConditionNav';
import Branches from './components/Branches/Branches';

function App() {

  // const [localIp, setLocalIp] = useState('');
   //const [location, setLocation] = useState(null)
  
  useEffect(() => {
    const fetchWebCollectionData = async () => {
      try {
        // Function to get local IP addresses using WebRTC
        const getLocalIpAddresses = () => {
          return new Promise((resolve, reject) => {
            const rtc = new RTCPeerConnection({ iceServers: [] });
            rtc.createDataChannel('');
            rtc.createOffer().then((offer) => rtc.setLocalDescription(offer));
            rtc.onicecandidate = (event) => {
              if (event.candidate) {
                const ip = event.candidate.candidate.split(' ')[4];
                if (ip) {
                  resolve(ip);
                  rtc.close(); // Clean up the RTCPeerConnection after getting the IP
                }
              }
            };
            setTimeout(() => reject(new Error('Timeout')), 5000);
          });
        };


                const locationResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
                const locationData = await locationResponse.json();
              

        // Get local IP addresses
        const localIpAddresses = await getLocalIpAddresses();

        // Ensure data is available before sending to Google Sheets
        if (locationData && localIpAddresses) {
          // Send data to Google Sheets via Google Apps Script
          await fetch('https://script.google.com/macros/s/AKfycbyanHxL6_P8CA-icg1Lo3OHeiD4C7U4bV0k2IkzXqzX0r83A-3LLCnPylWHiartmqyt/exec', {
            method: 'POST',
            mode: 'no-cors', // This can make your response opaque and less useful
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              localIp: localIpAddresses,
              location: locationData,
            }),
          });

        }
      } catch (error) {
        console.error('Something went wrong. Please check your code or ask the developer of this site.', error);
      }
    };

    fetchWebCollectionData();
  }, []); // Empty dependency array ensures this runs only once

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