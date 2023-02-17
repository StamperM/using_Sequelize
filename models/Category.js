const { Model, DataTypes } = require('sequelize');

const sequelize = require('../connection.js');

class Category extends Model {}


Category.init(
  {
    id :{
      type: INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    category_name: { 
      type: STRING,
      allowNull: false,

    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
module.exports = Category;
