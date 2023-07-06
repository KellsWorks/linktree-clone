import axios from "axios";

const ApiService = axios.create({
  baseURL: "http://localhost:3001/api/",
  timeout: 5000,
});


export default ApiService;
