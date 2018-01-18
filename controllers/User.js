/**
 * Author: Paradise Kelechi (Developer && IT Enthusiast)
 */
import models from '../models';
const User = models.User;

let users = {
    getUsers (req, res) {
        return User
        .findAll()
        .then((user) => {
            res.status(200).send({
                message: 'We made it!!!'
            });
        })
        .catch((error) => {
            res.status(400).send({
                message: 'Errors encountered when getting users!!!'
            });
        })
    },
    addUser (req, res) {
        return User
        .create({
            username: 'username'
        })
        .then((user) => {
            res.status(200).send({
                message: 'We added a user!!!'
            });
        })
        .catch((error) => {
            res.status(400).send({
                message: 'Errors encountered when adding user!!!'
            });
        })
    }
}

export default users;