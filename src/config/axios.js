import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://my-json-server.typicode.com/christianToscano96/JsonServer_CRUD/'
});

export default clienteAxios;