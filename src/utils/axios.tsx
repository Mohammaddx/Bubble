import axios from "axios";
import utl from "./utils";

interface axiosParams{
    endpoint: string;
    body?:{}
}

const baseURL = 'https://conduit.productionready.io/api';

const authPost = (endpoint:string, body: {}) =>
     axios.post(`${baseURL}/${endpoint}`, body);


const post = (endpoint:string, body: {}) => {
    return axios.post(`${baseURL}/${endpoint}`, body, utl.getToken()? {headers: {Authorization: "Token " + utl.getToken(),
"Content-Type" : "application/json"}}: undefined)
}

const get = (endpoint: string) => 
    axios.get(
        `${baseURL}/${endpoint}`,
        utl.getToken()
          ? {
              headers: {
                Authorization: "Token " + utl.getToken(),
                "Content-Type": "application/json"
              }
            }
          : undefined
      );

const DELETE  = (endpoint: string) => {
    return axios.delete(`${baseURL}/${endpoint}`, utl.getToken()? {headers: {Authorization: "Token " + utl.getToken(),
"Content-Type" : "application/json"}}: undefined)
}

const put = (endpoint:string, body: {}) =>
  axios
    .put(`${baseURL}/${endpoint}`, body, {
      headers: {
        Authorization: "Token " + utl.getToken(),
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.data);

export default {
    post, get, DELETE,authPost,put 
}