import {SERVER_PORT} from '@env';
import axios from 'axios';

const Api = axios.create({
  baseURL: `${SERVER_PORT}`,
});

export default Api;
