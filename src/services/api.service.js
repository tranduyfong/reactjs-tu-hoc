import axios from "../services/axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user';
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2OGE0MDk1ZGUzZTM4YTBiNWNmYjU3NTciLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NjM4MTM1NjEsImV4cCI6MTc2Mzg0OTU2MX0.TTM2h-EE9RK9OoPwEChtgtINDCK7aKdRZzmPivwavxU'
    return axios.post(URL_BACKEND, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


const fetchAllUserAPI = () => {
    const URL_BACKEND = '/api/v1/user';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2OGE0MDk1ZGUzZTM4YTBiNWNmYjU3NTciLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NjM4MTM1NjEsImV4cCI6MTc2Mzg0OTU2MX0.TTM2h-EE9RK9OoPwEChtgtINDCK7aKdRZzmPivwavxU'
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export { createUserAPI, fetchAllUserAPI };