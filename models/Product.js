// import important parts of sequelize library
const { Model, DataTypes, INTEGER, STRING, DECIMAL } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

    },
    product_name: {
      type: STRING,
      allowNull: false,

    },
    price: {
      type: DECIMAL,
      allowNull:false,
      isDecimal: true,

    },
    stock:{
      type: INTEGER,
      allowNull: false,
      isNumeric:true,
      equals:10,


    },
    category_id: {
      type: INTEGER,
      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;