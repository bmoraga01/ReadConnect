import axios from 'axios'

const url = 'http://127.0.0.1:8000/auth'

const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}


export const loginApi = async (email, password) => {
    try {
        const response = await axios.post(`${url}/jwt/create`, JSON.stringify({ email, password }), config)
        const data = response.data
        data.ok = true
        return data
    } catch (err) {
        const data = { ok: false }
        // , msg: err.response.data.detail
        return data
    }
}

export const registerApi = async (data) => {
    try {
        const response = await axios.post(`${url}/users/`, JSON.stringify(data), config)
        console.log(response.data);
        return true
    } catch (err) {
        //console.log(err.request.response);
        return false
    }
}

export const getUserApi = async (access) => {
    const tokenConfig = config
    tokenConfig.headers.Authorization = `JWT ${access}`
    try {
        const response = await axios.get(`${url}/users/me/`, tokenConfig)
        return response.data
    } catch (err) {
        return
    }
}

export const activateAccount = async data => {
    try {
        const response = await axios.post(`${url}/users/activation/`, JSON.stringify(data), config)
        return response.status === 204 ? true : false
    } catch (err) {
        return false
    }
}

export const resetPassword = async email => {
    try {
        const response = await axios.post(`${url}/users/reset_password/`, JSON.stringify({ email }), config)
        return response.status === 204 ? true : false
    } catch (err) {
        return false
    }
}

export const resetPasswordConfirm = async data => {
    try {
        const response = await axios.post(`${url}/users/reset_password_confirm/`, JSON.stringify(data), config)
        return response.status === 204 ? true : false
    } catch (err) {
        console.log(err);
        return false
    }
}