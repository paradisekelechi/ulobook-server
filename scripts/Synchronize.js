import models from '../models';

const {
  sequelize,
} = models;
sequelize.sync();
