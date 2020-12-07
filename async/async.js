const axios = require('axios');

class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject(new Error('error'));
        }
      }, 150);
    });
  }

  static async get() {
    try {
      const resposnse = await axios.get('https://jsonplaceholder.typicode.com/todos');
      return resposnse.data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Ajax;
