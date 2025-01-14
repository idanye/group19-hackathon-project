import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axiosInstance from "../services/api.js";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await axiosInstance.post('/staySafe/login', { email, password })

            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(response.data))

            // update the auth context
            dispatch({type: 'LOGIN', payload: response.data})

            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setError(error.response?.data?.error)
        }
    }

    return { login, isLoading, error }
}