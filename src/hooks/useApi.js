import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_TSE1ROUNDAPI
})

export const getData = async () => {
    try {
        const resp = await axios.get(api)
        console.log(resp)
    } catch (error) {
        console.log(error)
    }
}
