import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: null,
    user: '',
    access: '',
    refresh: '',
    isLogged: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogin: (state, action) => {
            console.log(action.payload)
            /*
            state.isLogged = true
            state.id = action.payload.id
            state.user = action.payload.user
            state.access = action.payload.access
            state.refresh = action.payload.refresh
            */
        },
        logout: (state) => {
            state.isLogged = false
        }
    }
})


export const { authLogin, logout } = authSlice.reducer