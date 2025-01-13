import React from 'react';
import Header from './components/Header';
import IpoCard from './components/IpoCard';
import FaqItem from './components/FaqItem';
import './App.css';

const App = () => {
  const faqs = [
    "How many lots should I apply for IPO?",
    "What is IPO GMP?",
    "Who decides the IPO price band?",
    "How is the lot size calculated?",
  ];

  const ipoData = [
    {
      title: "PKH Ventures Ltd.",
      priceBand: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      listingDate: "Not Issued",
      status: "CLOSE",
    },
    {
      title: "Wellness Forever",
      priceBand: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      listingDate: "Not Issued",
      status: "CLOSE",
    },
  ];

  return (
    <div className="app">
      <Header />
      <div className="ipo-section">
        {ipoData.map((ipo, index) => (
          <IpoCard key={index} {...ipo} />
        ))}
      </div>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq} />
        ))}
      </div>
    </div>
  );
};

export default App;
