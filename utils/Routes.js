/**
 * Author: Paradise Kelechi (Developer && IT Enthusiast)
 */

import user from '../controllers/User';

const routes = (app) => {
  app.get('/api/users', user.getUsers);
  app.post('/api/users/add', user.addUser);
};

export default routes;
