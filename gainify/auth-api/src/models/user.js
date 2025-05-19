const { Sequelize, DataTypes } = require('sequelize');

// Połączenie z PostgreSQL (dostosuj login, hasło, bazę)
const sequelize = new Sequelize('postgres://postgres:Kamileq1!@localhost:5432/gainify');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  surname: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = { User, sequelize };