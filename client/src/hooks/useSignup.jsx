import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axiosInstance from "../services/api.js";
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (user) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await axiosInstance.post('/staySafe/signup', user)

            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(response.data))

            // update the auth context
            dispatch({type: 'LOGIN', payload: response.data})
            if(user.userType === 'expert')
            {
                alert("Your request has been received and forwarded to the admin.");
            }
            else
            {
                alert("You have successfully signed up. Please log in to continue.");
            }
            setIsLoading(false)
            navigate(-1);

        } catch (error) {
            setIsLoading(false)
            setError(error.response?.data?.error)
            alert("Error in signup: " + error.response?.data?.error);
        }

    }

    return { signup, isLoading, error }
}