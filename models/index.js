import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configObject from '../utils/Config';

const databaseConfiguration = configObject[process.env.NODE_ENV];
const basename = path.basename(module.filename);
const db = {};
const {
  Op,
} = Sequelize;
let sequelize;

if (databaseConfiguration.use_env_variable) {
  sequelize = new Sequelize(databaseConfiguration.use_env_variable);
} else {
  const {
    database,
    username,
    password,
  } = databaseConfiguration;
  sequelize = new Sequelize(
    database,
    username,
    password, {
      dialect: 'postgres',
      logging: false,
      freezeTableName: true,
      operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like,
      },
    },
  );
}

fs
  .readdirSync(__dirname)
  .filter(file => (
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  ))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
