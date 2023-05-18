
// import React from 'react';

// const FlightPriceList = ({ flightPrices }) => {
//   if (!flightPrices || Object.keys(flightPrices).length === 0) {
//     // Handle the case when flightPrices is null or empty
//     return null;
//   }

//   const { indigo, airAsia, vistara } = flightPrices.prices;

//   return (
//     <div>
//       <h2>Flight Prices:</h2>
//       <ul>
//         <li>
//           Source: {flightPrices.source}, Destination: {flightPrices.destination}
//         </li>
//         <li>Indigo: {indigo}</li>
//         <li>AirAsia: {airAsia}</li>
//         <li>Vistara: {vistara}</li>
//       </ul>
//     </div>
//   );
// };

// export default FlightPriceList;



import React from 'react';

const FlightPriceList = ({ flightPrices }) => {
  if (!flightPrices || Object.keys(flightPrices).length === 0) {
    // Handle the case when flightPrices is null or empty
    return null;
  }

  const { indigo, airAsia, vistara } = flightPrices.prices;

  return (
    <div className="container mt-4">
      <h2>Flight Prices:</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Source:</strong> {flightPrices.source}, <strong>Destination:</strong> {flightPrices.destination}
        </li>
        <li className="list-group-item">Indigo: {indigo}</li>
        <li className="list-group-item">AirAsia: {airAsia}</li>
        <li className="list-group-item">Vistara: {vistara}</li>
      </ul>
    </div>
  );
};

export default FlightPriceList;
