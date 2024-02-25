import axios from 'axios'

const $host = axios.create({
     baseURL: 'http://localhost:5000/' //process.env.REACT_APP_API_URL
})

export {
    $host
}