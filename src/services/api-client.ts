import axios from "axios";

export interface FetchResponse <T>{
    count: number;
    results: T []
}


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c29dec0c2a0c4c3aa75a6d56329bb263'
    }
})