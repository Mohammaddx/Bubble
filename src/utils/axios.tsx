import axios from "axios";
import utl from "./utils";

const baseURL = 'https://conduit.productionready.io/api/'
const post = (endpoint: string, body: {}) => {
    return axios.post(`${baseURL}/${endpoint}`, body, utl.getToken()? {headers: {Authorization: "Token " + utl.getToken(),
"Content-Type" : "application/json"}}: undefined)
}
const get = (endpoint: string) => {
    return axios.get(`${baseURL}/${endpoint}`, utl.getToken()? {headers: {Authorization: "Token " + utl.getToken(),
"Content-Type" : "application/json"}}: undefined)
}

export default {
    post, get
}