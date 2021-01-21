import axios from "axios"

export default axios.create({
  // URL INTEGRATION : https://integration.capsulelab.eu/cobot/scrumboardback/
  // URL LOCAL : localhost:9090/
  baseURL: process.env.PUBLIC_URL==="/alarm-online" ? "http://thomas-chateau.net/alarm-online" : "http://localhost:3000/",
  headers: {
    "Content-type": "application/json",
    },
})
