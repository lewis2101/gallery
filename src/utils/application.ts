import axios from "axios";
const ENDPOINT = {
    randomPhotos: '/photos/random',
    searchPhotos: '/search/photos',
    getPhoto: '/photos/'
}

const accessToken = import.meta.env.VITE_ACCESS_TOKEN
const http = () => {
    console.log(import.meta.env.VITE_BASE_URL)
    return axios.create({
        baseURL: import.meta.env.VITE_BASE_URL
    })
}

export const getRandomPhotos = () => {
    return http().get(`${ENDPOINT.randomPhotos}?client_id=${accessToken}&count=8`)
}

export const getSearchPhoto = (query: string) => {
    return http().get(`${ENDPOINT.searchPhotos}?client_id=${accessToken}&query=${query}`)
}

export const getPhoto = (id: string) => {
    return http().get(`${ENDPOINT.getPhoto}/${id}?client_id=${accessToken}`)
}