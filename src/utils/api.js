import axios from "axios"

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    params: {
        api_key: "miApyKey",
        page: 1,
        lenguage: "en_US"
    }
})

export { api }