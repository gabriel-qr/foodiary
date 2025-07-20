import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://awk7fvpa04.execute-api.sa-east-1.amazonaws.com',
});
