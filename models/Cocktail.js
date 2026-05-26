const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cocktail extends Model {}

Cocktail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    drinkName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drinkImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drinkInstructions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drinkIngredient1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drinkIngredient2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drinkIngredient3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drinkMeasurement1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drinkMeasurement2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drinkMeasurement3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cocktail',
  }
);

module.exports = Cocktail;
