const { DataTypes, Sequelize } = require("sequelize");
const User = require("../models/User");
const CHAMBRE=require('../models/chambre')
const RESERVATION=require('../models/Reservation')

const sequelize = new Sequelize({
   dialect: 'mariadb',
  host: 'bql3rhfld479jnsds3kj-mysql.services.clever-cloud.com',
  port: 3306, // Le port MySQL par défaut
  username: 'uiaamrqiqazzm6hs',
  password: 'uiaamrqiqazzm6hs', // Remplacez par votre mot de passe vPanel
  database: 'bql3rhfld479jnsds3kj',
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
