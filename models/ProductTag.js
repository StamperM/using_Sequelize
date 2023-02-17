const { Model, DataTypes } = require('sequelize');

const sequelize = require('../connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    product_id:{
      type:DataTypes.INTEGER,
      references: "Product",
      referenceKey: "id",
    },
    tag_id:{
      type:DataTypes.INTEGER,
      references:"Tag",
      referenceKey:"id",
    },
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
