require('dotenv').config();

const Sequelize = require('sequelize');
let sequelize;

if(process.env.JAWSDB_URL){
 Sequelize(process.env.JAWSDB_URL)
 }else{
  sequelize= new  Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
     "", 
      {
      host: '127.0.0.1',
      dialect: 'mysql',
      dialectOptions: {
       decimalNumbers: true,
      }
      },
    );
  }
    

module.exports = sequelize;
