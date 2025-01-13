import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axiosInstance from "../services/api.js";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (user) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await axiosInstance.post('/signup', user)

            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(response.data))

            // update the auth context
            dispatch({type: 'LOGIN', payload: response.data})
            alert("Your request has been received and forwarded to the admin.");

            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setError(error.response?.data?.error)
        }

    }

    return { signup, isLoading, error }
}