import api from '../services/config'

type LoginProps = {
    email:string,
    password:string
}

export const Login =  (payload:LoginProps) => {
    return api.post('/login', payload)
}