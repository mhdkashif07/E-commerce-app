import { AuthContext } from './../context/auth-context';
import { useContext } from 'react';

export const getFromLocalStorage = (key: string) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return localStorage.getItem(key)
  }

export const getFromSessionStorage = (key: string) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return sessionStorage.getItem(key)
  }

  export const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
  }

