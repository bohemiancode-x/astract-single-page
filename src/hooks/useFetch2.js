import React, {useState} from 'react'

const useFetch = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(null)

    const FetchData = async (url, params) => {
        setError(null)
        setIsPending(true)

        try {
            const response = await fetch(url + '?' + new URLSearchParams(params))
            const data = await response.json()

        } catch (err) {
            console.log(err);
            setError(err.message)
            setIsPending(false)
        }
    };
}

export default useFetch
