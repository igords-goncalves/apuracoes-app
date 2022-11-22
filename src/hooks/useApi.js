import axios from 'axios'
import { useEffect } from 'react'

export const useApi = () => {

    const baseURL = process.env.REACT_APP_TSE1ROUNDAPI

    useEffect(() => {
        axios.get(baseURL)
         .then(response => console.log(response))
         .catch(error => console.log('teste' + error))
    }, [baseURL])
}