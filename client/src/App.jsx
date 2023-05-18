import React, { useState } from 'react';
import FlightPriceForm from './Components/FlightPriceForm';
import FlightPriceList from './Components/FlightPriceList';

const App = () => {
  const [flightPrices, setFlightPrices] = useState({});

  return (
    <div className="container">
      <h1>Flight Price API</h1>
      <FlightPriceForm setFlightPrices={setFlightPrices} />
      <FlightPriceList flightPrices={flightPrices} />
    </div>
  );
};

export default App;
