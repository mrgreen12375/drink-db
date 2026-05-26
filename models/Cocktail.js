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
      allowNull: true,
    },
    drinkIngredient2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkIngredient3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkIngredient4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkIngredient5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkIngredient6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkIngredient7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkMeasurement1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkMeasurement2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkMeasurement3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkMeasurement4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkMeasurement5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkMeasurement6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkMeasurement7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkVideo: {
      type: DataTypes.STRING,
      allowNull: true,
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
