import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import IpoCard from './components/IpoCard';
import FaqItem from './components/FaqItem';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import './App.css';

const App = () => {
  const [ipoData, setIpoData] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch IPO Data
  useEffect(() => {
    const fetchIpoData = async () => {
      try {
        console.log('Fetching IPO data from server...');
        const response = await fetch('http://localhost:5000/api/ipo-data');
        const data = await response.json();
        console.log('Fetched IPO data:', data); // Log the data for debugging
        setIpoData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching IPO data:', error);
        setLoading(false);
      }
    };

    fetchIpoData();
  }, []);

  // Fetch FAQ Data
  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        console.log('Fetching FAQ data from server...');
        const response = await fetch('http://localhost:5000/api/faqs');
        const data = await response.json();
        console.log('Fetched FAQ data:', data); // Log the data for debugging
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchFaqData();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="ipo-section">
          <div className="ipo-header-description">
            <h1 className="ipo-section-title">Upcoming IPO</h1>
            <p className="ipo-section-description">
              Companies that have filed for an IPO with SEBI. Some details might be disclosed by the companies later.
            </p>
          </div>

          <div className="ipo-container">
            {loading ? (
              <p>Loading...</p>
            ) : (
              ipoData.map((ipo, index) => (
                <IpoCard key={index} {...ipo} />
              ))
            )}
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p className="faq-description">
            Find answers to common questions that come in your mind related to IPO.
          </p>
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
