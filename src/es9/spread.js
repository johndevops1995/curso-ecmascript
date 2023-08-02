const user = {username: 'jfspeed', age: 43, country: 'CO'};
const {username, ...values } = user;
console.log(username);
console.log(values);