import axios from 'axios'
import { useEffect, useState } from 'react'

const baseURL = process.env.REACT_APP_TSE1ROUNDAPI

export const useApi = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState('');

    const fetchData = () => {
        axios.get(baseURL)
        .then(res => {
            setData(res.data)
        })
        .catch(error => setError(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)
    return  { data, error }
}