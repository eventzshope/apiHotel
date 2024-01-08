const { DataTypes, Sequelize } = require("sequelize");
const User = require("../models/User");
const CHAMBRE=require('../models/chambre')
const RESERVATION=require('../models/Reservation')
require("dotenv").config()
console.log(process.env.DB_USERNAME)
const sequelize = new Sequelize(process.env.DBNAME, process.env.DB_USERNAME, process.env.DBPASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mariadb",
  logging: false,
});

sequelize
  .authenticate()
  .then((_) => "connexion reussir")
  .catch((error) => console.log(error));

const user = User(sequelize, DataTypes);
const reservation=RESERVATION(sequelize,DataTypes)
const chambre=CHAMBRE(sequelize,DataTypes)

const initDb = () => {
  return sequelize.sync().then((_) => { }); 
}; 

module.exports = {
  initDb,
  user, 
  reservation,
  chambre,
};
