
import React, { useState } from 'react';
import axios from 'axios';
import FlightPriceList from './FlightPriceList';

const FlightPriceForm = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [flightPrices, setFlightPrices] = useState(null);

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://gurgaon-at-aegiscovenant.onrender.com/api/flight-prices', {
        params: {
          source,
          destination,
          date
        }
      });

      setFlightPrices(response.data.data);
    } catch (error) {
      console.error('Error fetching flight prices:', error);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="source" className="form-label">Source:</label>
          <select id="source" className="form-select" value={source} onChange={handleSourceChange}>
            <option value="">Select Source</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="destination" className="form-label">Destination:</label>
          <select id="destination" className="form-select" value={destination} onChange={handleDestinationChange}>
            <option value="">Select Destination</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date:</label>
          <input id="date" type="date" className="form-control" value={date} onChange={handleDateChange} />
        </div>
        <button type="submit" className="btn btn-primary">Get Flight Prices</button>
      </form>

      {flightPrices && <FlightPriceList flightPrices={flightPrices} />}
    </div>
  );
};

export default FlightPriceForm;
