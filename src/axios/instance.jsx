import axios from "axios";

const url = " http://localhost:3000";

const axios_instance = axios.create({
    baseURL: url
});

export {axios_instance};