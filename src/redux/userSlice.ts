import {createSlice} from '@reduxjs/toolkit'


type UserProps = {
    token?:string;
    email?:string;
    isLogged:boolean;
}

export const userReduce = createSlice({
    name:'user',
    initialState: {
        isLogged: false
    } as UserProps,
    reducers: {
        loginUser(state, action) {
          Object.assign(state, {
                token: action.payload.token,
                email:action.payload.email,
                isLogged: true
            })
        },
        logout(state, action) {
            Object.assign(state, {
              token:undefined,
              email: undefined,
              isLogged: false  
            })
        }        
    }   
})

export const {loginUser, logout} = userReduce.actions
export default userReduce.reducer

