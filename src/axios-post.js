import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://practice-react-818ca-default-rtdb.firebaseio.com/',
});

export default instance;
