// api url
const url = 'https://jsonplaceholder.typicode.com/users';

// dom
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

// user data
let user = {};

const startApp = () => {
  axios
    .get(url)
    .then(function (response) {
      user = response.data;
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
