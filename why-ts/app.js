const url = 'https://jsonplaceholder.typicode.com/users/1';

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

let user = {};


/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */


/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */


/**
 * @returns {Promise<User>}
 */
const fetchUser = () => {
  return axios.get(url);
}


const startApp = () => {

  fetchUser()
    .then(function (response) {
      user = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
