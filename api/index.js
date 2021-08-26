import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:3000.com/' });

API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer${accessToken}`;  //add access token once reducers is fixed by abhishek
    return req;
});

export const auth = () => API.post('/auth')
