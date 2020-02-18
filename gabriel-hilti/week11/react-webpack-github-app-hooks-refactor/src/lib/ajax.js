import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';
const AUTH_TOKENS = '?client_id=4ec1b8f9c149f7c46ffd&client_secret=a05ec287c29ebd9633131b5a08298530709130e9';


export default {
  getUserInfo(user) {
    const url = `${ BASE_URL }/${ user }${ AUTH_TOKENS }`;
    return axios.get(url);
  },
  getUserRepos(user) {
    const url = `${BASE_URL}/${user}/repos${AUTH_TOKENS}`;
    return axios.get(url);
  },
  getRandomUser() {
    const url = `${ BASE_URL }${ AUTH_TOKENS }`;
    return axios.get(url).then(res => {
      const randomIndex = Math.floor(Math.random()*res.data.length);
      console.log('randomUser:',res);
      return res.data[randomIndex];
    });
  }
};
