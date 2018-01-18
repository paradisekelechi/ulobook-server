/**
 * Author: Paradise Kelechi
 */
import sequelize from 'sequelize';

export default (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      notNull: {
        args: true,
        msg: 'Username is required'
      },
      unique: {
        args: true,
        msg: 'Username must be unique'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Email is required'
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      notNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
    } 
  },
  {
    freezeTableName: true,
  });
  
  // Define your associations here

  return User;
};

