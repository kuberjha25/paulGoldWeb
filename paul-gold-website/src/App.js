import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import HeroSection from "./components/pages/HeroSection";
import BuySection from "./components/pages/BuySection";
import ContactUs from "./components/pages/ContactUs";
import About from "./components/pages/About";
import Terms from "./components/pages/Terms";
import GlobalAlert from "./components/alert/GlobalAlert";
import AppLinkPopup from "./components/popup/AppLinkPopup";

function App() {
  const [alertMessage, setAlertMessage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [metalRates, setMetalRates] = useState({
    gold: {
      buy_rate: 17418.95,
      sell_rate: 16331.3,
      purity: "24K 99.9%",
      unit: "GRAM"
    },
    silver: {
      buy_rate: 375.06,
      sell_rate: 351.64,
      purity: "999 Purity",
      unit: "GRAM"
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  // Fetch rates initially
  useEffect(() => {
    fetchMetalRates();
    
    // Set interval to fetch rates every 2 minutes (120000 ms)
    const intervalId = setInterval(fetchMetalRates, 120000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // API function to fetch metal rates
  const fetchMetalRates = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://b2c-api-uat.paulgold.in:8443/api/v1/metal/rates/latest", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        // Add any necessary headers like authorization tokens if required
        // headers: {
        //   "Authorization": `Bearer ${yourToken}`,
        //   "Accept": "application/json",
        //   "Content-Type": "application/json",
        // },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success && data.data && data.data.length > 0) {
        // Process the API response
        const goldData = data.data.find(item => item.metal_type === "GOLD");
        const silverData = data.data.find(item => item.metal_type === "SILVER");
        
        if (goldData && silverData) {
          setMetalRates({
            gold: {
              buy_rate: parseFloat(goldData.inclusive_gst_buy_rate || goldData.buy_rate),
              sell_rate: parseFloat(goldData.sell_rate),
              purity: `${goldData.metal_purity} ${goldData.metal_purity === "24K" ? "99.9%" : ""}`,
              unit: goldData.unit,
              rawData: goldData // Pass complete data if needed
            },
            silver: {
              buy_rate: parseFloat(silverData.inclusive_gst_buy_rate || silverData.buy_rate),
              sell_rate: parseFloat(silverData.sell_rate),
              purity: `${silverData.metal_purity} Purity`,
              unit: silverData.unit,
              rawData: silverData // Pass complete data if needed
            }
          });
          
        }
      }
      setError(null);
    } catch (error) {
      // console.error("Error fetching metal rates:", error);
      setError("Unable to fetch live rates. Using cached rates.");
      // Don't set loading to false on error, keep showing cached data
    } finally {
      setLoading(false);
    }
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSuccess = (message) => {
    setAlertMessage(message);
  };

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  return (
    <div className="App">
      {/* Global Alert */}
      {alertMessage && (
        <GlobalAlert message={alertMessage} onClose={handleCloseAlert} />
      )}

      {/* Optional: Show loading or error indicator */}
      {loading && (
        <div className="rates-loading-indicator">
          Fetching live rates...
        </div>
      )}
      
      {error && (
        <div className="rates-error-indicator">
          {error}
        </div>
      )}

      <AppLinkPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSuccess={handleSuccess}
      />

      <Header onOpenPopup={handleOpenPopup} onSuccess={handleSuccess} />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <BuySection
                onOpenPopup={handleOpenPopup}
                onSuccess={handleSuccess}
                metalRates={metalRates}
                loading={loading}
              />
              <ContactUs />
            </>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/aboutus" element={<About />} />

        {/* TERMS PAGE */}
        <Route path="/terms-condition" element={<Terms />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;