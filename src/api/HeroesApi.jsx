import axios from "axios";

const baseURL = 'https://api-superheroes-edy.herokuapp.com';

const heroesApi = axios.create({baseURL})

export default heroesApi
