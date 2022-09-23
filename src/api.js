import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.0.42:8081",
  headers: {
    "Content-type": "application/json"
  }
});