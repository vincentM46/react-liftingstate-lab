import axios from 'axios';

export default async function fetchData(Keyword) {
    const BASE_URL = "https://api.giphy.com"
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
    let response = await axios.get(`${BASE_URL}/v1/gifts/search?api_key=${REACT_APP_API_KEY}&q=${Keyword}&limit=10`)

    let gif = response.data.data
    return gif
}