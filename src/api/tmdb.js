import axios from "axios";

export default axios.create({
    baseURL: 'http://api.themoviedb.org/3',
    headers: {
        'Accept': 'application/json'
    },
    params: {
        api_key: '068ccc0956857d96f88cfe7582410c05'
    }
})