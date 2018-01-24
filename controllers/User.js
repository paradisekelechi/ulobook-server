/**
 * Author: Paradise Kelechi (Developer && IT Enthusiast)
 */
import models from '../models';
import ResponseHandler from '../utils/ResponseHandler';

const {
  User,
} = models;

const users = {
  getUsers(req, res) {
    return User
      .findAll()
      .then((user) => {
        ResponseHandler(req, res, 200, true, 'We made it', user, 'user');
      })
      .catch((error) => {
        ResponseHandler(
          req, res, 400, false, 'Errors encountered when getting users', error,
          'error',
        );
      });
  },
  addUser(req, res) {
    return User
      .create({
        username: 'username',
      })
      .then((user) => {
        ResponseHandler(req, res, 200, true, 'We added a user', user, 'user');
      })
      .catch((error) => {
        ResponseHandler(
          req, res, 400, false, 'Errors encountered when adding a user', error,
          'error',
        );
      });
  },
};

export default users;
