const { DataTypes, Sequelize } = require("sequelize");
const User = require("../models/User");
const CHAMBRE=require('../models/chambre')
const RESERVATION=require('../models/Reservation')
const sequelize = new Sequelize("hotel", "root", "", {
  host: "localhost",
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
