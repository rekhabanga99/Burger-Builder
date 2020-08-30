import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-adea0.firebaseio.com/'
});

export default instance;