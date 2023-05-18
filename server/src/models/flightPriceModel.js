// const mongoose =require("mongoose")


// const flightPriceSchema = new mongoose.Schema({
//           source: {
//             type: String,
//             required: true
//           },
//           destination: {
//             type: String,
//             required: true
//           },
//           date: {
//             type: Date,
//             required: true
//           },
//           prices: {
//             indigo: {
//               type: String,
//               required: true
//             },
//             airAsia: {
//               type: String,
//               required: true
//             },
//             vistara: {
//               type: String,
//               required: true
//             }
//           }
//         });
        
//         const flightPrice = mongoose.model('FlightPrice', flightPriceSchema);
        

//                 module.exports = flightPrice;


const mongoose = require("mongoose");

const flightPriceSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  prices: {
    indigo: {
      type: String,

    },
    airAsia: {
      type: String,

    },
    vistara: {
      type: String,

    },
  },
});

const flightPrice = mongoose.model('FlightPrice', flightPriceSchema);

module.exports = flightPrice;
