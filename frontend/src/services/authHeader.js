export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user) {
      // for Node.js Express back-end
      return { 'Authorization': 'Bearer '+ user ,
      'Access-Control-Allow-Origin': '*'};
    } else {
      return {};
    }
  }
  