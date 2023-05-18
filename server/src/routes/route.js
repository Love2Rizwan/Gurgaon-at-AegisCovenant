const express =require("express")
const route = express.Router();
const  apiController =require("../controllers/apiController")

route.get('/flight-prices' , apiController.fetchApi)

module.exports= route;