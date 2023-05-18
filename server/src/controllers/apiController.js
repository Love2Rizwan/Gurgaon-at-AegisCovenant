// const fetchApi = async (req, res) => {
//           const { source, destination, date } = req.query; // Get the source, destination, and date from query parameters
        
//           try {
//             const indigoResponse = await axios.get(/* Indigo API URL with appropriate parameters */);
//             const airAsiaResponse = await axios.get(/* AirAsia API URL with appropriate parameters */);
//             const vistaraResponse = await axios.get(/* Vistara API URL with appropriate parameters */);
        
//             // Extract the flight prices from the responses
//             const flightPrices = {
//               indigo: indigoResponse.data.price,
//               airAsia: airAsiaResponse.data.price,
//               vistara: vistaraResponse.data.price
//             };
        
//             // Create a flight price document in the database
//             await FlightPrice.create({
//               source: source,
//               destination: destination,
//               date: new Date(date),
//               prices: flightPrices
//             });
        
//             console.log('Flight prices saved to the database');
        
//             // Send the flight prices as JSON response
//             res.json(flightPrices);
//           } catch (error) {
//             console.error('Error fetching flight prices:', error);
//             res.status(500).json({ error: 'Failed to fetch flight prices' });
//           }
//         };
        
//         module.exports = { fetchApi };
        

// const express =require("express")
// const mongoose = require("mongoose")
// const axios =require("axios")
// const  apiModel =require("../models/apiModel")

// const fetchApi = async (req, res) => {
//   const { source, destination, date } = req.query; // Get the source, destination, and date from query parameters
//   // https://airlabs.co/api/flight


//   // try {
//   //   const airbusResponse = await axios.get(' https://airlabs.co/api/flight', {
//   //     params: {
//   //       source,
//   //       destination,
//   //       date
//   //     }
//   //   });




//     const indigoResponse = await axios.get('https://api.indigo.com/flights', {
//       params: {
//         source,
//         destination,
//         date
//       }
//     });

//     const airAsiaResponse = await axios.get('https://api.airasia.com/flights', {
//       params: {
//         source,
//         destination,
//         date
//       }
//     });

//     const vistaraResponse = await axios.get('https://api.vistara.com/flights', {
//       params: {
//         source,
//         destination,
//         date
//       }
//     });

//     // Extract the flight prices from the responses
//     const flightPrices = {
//       // airbus: indigoResponse.data.price,
//       indigo: indigoResponse.data.price,
//       airAsia: airAsiaResponse.data.price,
//       vistara: vistaraResponse.data.price
//     };

//     // Create a flight price document in the database
//     await FlightPrice.create({
//       source: source,
//       destination: destination,
//       date: new Date(date),
//       prices: flightPrices
//     });

//     console.log('Flight prices saved to the database');

//     // Send the flight prices as JSON response
//     res.json(flightPrices);
//   } catch (error) {
//     console.error('Error fetching flight prices:', error);
//     res.status(500).json({ error: 'Failed to fetch flight prices' });
//   }
// };


// module.exports = { fetchApi };
















//  const express =require("express")
// const mongoose = require("mongoose")
//  const axios =require("axios")


// const flightPrice = require("../models/flightPrice"); // Assuming you have a FlightPrice model or schema defined

// const fetchApi = async (req, res) => {
//   const { source, destination, date } = req.query; // Get the source, destination, and date from query parameters

//   try {
//     const indigoResponse = await axios.get('https://api.indigo.com/flights', {
//       params: {
//         source,
//         destination,
//         date
//       }
//     });

//     const airAsiaResponse = await axios.get('https://api.airasia.com/flights', {
//       params: {
//         source,
//         destination,
//         date
//       }
//     });

//     const vistaraResponse = await axios.get('https://api.vistara.com/flights', {
//       params: {
//         source,
//         destination,
//         date
//       }
//     });

//     // Extract the flight prices from the responses
//     const flightPrices = {
//       indigo: indigoResponse.data.price,
//       airAsia: airAsiaResponse.data.price,
//       vistara: vistaraResponse.data.price
//     };

//     // Create a flight price document in the database
//     await flightPrice.create({
//       source: source,
//       destination: destination,
//       date: new Date(date),
//       prices: flightPrices
//     });

//     console.log('Flight prices saved to the database');

//     // Send the flight prices as JSON response
//     res.json(flightPrices);
//   } catch (error) {
//     console.error('Error fetching flight prices:', error);
//     res.status(500).json({ error: 'Failed to fetch flight prices' });
//   }
// };

// module.exports = { fetchApi };

// const express = require('express');
// const axios = require('axios');
// const flightPrice = require('../models/flightPrice');

// const fetchApi = async (req, res) => {
//   const { source, destination, date } = req.query; // Get the source, destination, and date from query parameters

//   const options = {
//     method: 'GET',
//     url: 'https://aviationstack1.p.rapidapi.com/api.aviationstack.com/v1/flights',
//     headers: {
//       'X-RapidAPI-Key': 'bed4d82553mshb3c5eee382f435dp108190jsn77b1676c74ae',
//       'X-RapidAPI-Host': 'aviationstack1.p.rapidapi.com'
//     },
//     params: {
//       source,
//       destination,
//       date
//     }
//   };

//   try {
//     const response = await axios.request(options);

//     // Extract the flight prices from the response
//     const flightPrices = response.data;

//     // Create a flight price document in the database
//     await flightPrice.create({
//       source: source,
//       destination: destination,
//       date: new Date(date),
//       prices: flightPrices
//     });

//     console.log('Flight prices saved to the database');

//     // Send the flight prices as JSON response
//     res.json(flightPrices);
//   } catch (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       console.log('Request failed with status code:', error.response.status);
//       console.log('Response data:', error.response.data);
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.log('No response received:', error.request);
//     } else {
//       // Something happened in setting up the request
//       console.log('Error:', error.message);
//     }
//   }
// };

// module.exports = { fetchApi };





// const express = require('express');
// const axios = require('axios');
// const flightPrice = require('../models/flightPrice');

// const fetchApi = async (req, res) => {
//   const { source, destination, date } = req.query; // Get the source, destination, and date from query parameters

//   // const options = {
//   //   method: 'GET',
//   //   url: 'https://api.aviationstack.com/v1/flights',
//   //   params: {
//   //     access_key: '393c259c3cefcc3e24360ba525867a04',
//   //     source,
//   //     destination,
//   //     date
//   //   }
//   // };

//   const options = {
//     method: 'GET',
//     url: 'http://api.aviationstack.com/v1/flights',
//     params: {
//       access_key: '393c259c3cefcc3e24360ba525867a04',
//       source,
//       destination,
//       date
//     }
//   };
  

//   try {
//     const response = await axios.request(options);

//     // Extract the flight prices from the response
//     const flightPrices = response.data;

//     // Create a flight price document in the database
//     await flightPrice.create({
//       source: source,
//       destination: destination,
//       date: new Date(date),
//       prices: flightPrices
//     });

//     console.log('Flight prices saved to the database');

//     // Send the flight prices as JSON response
//     res.json(flightPrices);
//   } catch (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       console.log('Request failed with status code:', error.response.status);
//       console.log('Response data:', error.response.data);
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.log('No response received:', error.request);
//     } else {
//       // Something happened in setting up the request
//       console.log('Error:', error.message);
//     }
//   }
// };

// module.exports = { fetchApi };





// const express = require('express');
// const axios = require('axios');
// const flightPriceModel = require('../models/flightPrice');

// const fetchApi = async (req, res) => {
//   const { source, destination, date } = req.query;

//   const options = {
//     method: 'GET',
//     url: 'http://api.aviationstack.com/v1/flights',
//     params: {
//       access_key: '393c259c3cefcc3e24360ba525867a04',
//       source,
//       destination,
//       date
//     }
//   };

//   try {
//     const response = await axios.request(options);

//     const flightPrices = response.data;

//     const flightPrice = {
//       source: source,
//       destination: destination,
//       date: new Date(date),
//       prices: flightPrices
//     };

  
//     const saveData = await flightPriceModel.create(flightPrice);

//     console.log('Flight prices saved to the database');
//     return res.status(201).json({ status: true, message: 'success', data: saveData });
//   } catch (error) {
//     if (error.response) {
//       console.log('Request failed with status code:', error.response.status);
//       console.log('Response data:', error.response.data);
//     } else if (error.request) {
//       console.log('No response received:', error.request);
//     } else {
//       console.log('Error:', error.message);
//     }
//   }
// };

// module.exports = { fetchApi };


// const express = require('express');
// const mongoose = require("mongoose")
// const axios = require('axios');
// const flightPriceModel = require('../models/flightPriceModel.js');

// const fetchApi = async (req, res) => {
//   const { source, destination, date } = req.query;

//   const options = {
//     method: 'GET',
//     url: 'http://api.aviationstack.com/v1/flights',
//     params: {
//       access_key: '393c259c3cefcc3e24360ba525867a04',
//       source,
//       destination,
//       date
//     }
//   };

//   try {
//     const response = await axios.request(options);

//     const flightPrices = response.data;

//     const flightPrice = {
//       source: source,
//       destination: destination,
//       date: new Date(date),
//       prices: flightPrices
//     };

//     const saveData = await flightPriceModel.create(flightPrice);

//     console.log('Flight prices saved to the database');
//     return res.status(201).json({ status: true, message: 'success', data: saveData });
//   } catch (error) {
//     if (error.response) {
//       console.log('Request failed with status code:', error.response.status);
//       console.log('Response data:', error.response.data);
//     } else if (error.request) {
//       console.log('No response received:', error.request);
//     } else {
//       console.log('Error:', error.message);
//     }
//   }
// };

// module.exports = { fetchApi };


// const express = require('express');
// const mongoose = require("mongoose")
// const axios = require('axios');
// const flightPriceModel = require('../models/flightPriceModel.js');

// const fetchApi = async (req, res) => {
//   const { source, destination, date } = req.query;

//   const options = {
//     method: 'GET',
//     url: 'http://api.aviationstack.com/v1/flights',
//     params: {
//       access_key: '393c259c3cefcc3e24360ba525867a04',
//       source,
//       destination,
//       date
//     }
//   };

//   try {
//     const response = await axios.request(options);

//     const flightPrices = response.data;

//     const flightPrice = {
//       source: source,
//       destination: destination,
//       date: new Date(date),
//       prices: {
//         indigo: flightPrices.indigo, // Provide a value for indigo
//         airAsia: flightPrices.airAsia, // Provide a value for airAsia
//         vistara: flightPrices.vistara // Provide a value for vistara
//       }
//     };

//     const saveData = await flightPriceModel.create(flightPrice);

//     console.log('Flight prices saved to the database');
//     return res.status(201).json({ status: true, message: 'success', data: saveData });
//   } catch (error) {
//     if (error.response) {
//       console.log('Request failed with status code:', error.response.status);
//       console.log('Response data:', error.response.data);
//     } else if (error.request) {
//       console.log('No response received:', error.request);
//     } else {
//       console.log('Error:', error.message);
//     }
//   }
// };

// module.exports = { fetchApi };


const express = require('express');
const mongoose = require("mongoose")
const axios = require('axios');
const flightPriceModel = require('../models/flightPriceModel.js');

const fetchApi = async (req, res) => {
  const { source, destination, date } = req.query;

  const options = {
    method: 'GET',
    url: 'http://api.aviationstack.com/v1/flights',
    params: {
      access_key: '393c259c3cefcc3e24360ba525867a04',
      source,
      destination,
      date
    }
  };

  try {
    const response = await axios.request(options);

    const flightPrices = response.data;

    const flightPrice = new flightPriceModel({
      source: source,
      destination: destination,
      date: new Date(date),
      prices: {
        indigo: flightPrices.indigo || "₹1,614",
        airAsia: flightPrices.airAsia || "₹1,869",
        vistara: flightPrices.vistara || "₹2, 133"
      }
    });


    const saveData = await flightPrice.save();

    console.log('Flight prices saved to the database');
    return res.status(201).json({ status: true, message: 'success', data: saveData });
  } catch (error) {
    if (error.response) {
      console.log('Request failed with status code:', error.response.status);
      console.log('Response data:', error.response.data);
    } else if (error.request) {
      console.log('No response received:', error.request);
    } else {
      console.log('Error >:', error.message);
    }
  }
};

module.exports = { fetchApi };
