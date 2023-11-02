import axios from "axios";

const url = 'http://127.0.0.1:8000/api/v1/libros';

const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export const listaLibrosApi = async (page=1,) => {
    try {
        const response = await axios.get(`${url}?page=${page}`);
        return response.data
    } catch (err) {
        return []
    }
}

export const detalleLibroApi = async id => {
    try {
        const response = await axios.get(`${url}/${id}`)
        return response.data
    } catch (err) {
        return false
    }
}