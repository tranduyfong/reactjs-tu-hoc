import axios from "../services/axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user';
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2OGE0MDk1ZGUzZTM4YTBiNWNmYjU3NTciLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NTg1MjI1MTIsImV4cCI6MTc1ODU1ODUxMn0.LTtTGQCiLZLmoO38tK6-x9qo6eEsFu7rDbUnWOAF5pQ'
    return axios.post(URL_BACKEND, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


const fetchAllUserAPI = () => {
    const URL_BACKEND = '/api/v1/user';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2OGE0MDk1ZGUzZTM4YTBiNWNmYjU3NTciLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NTg1MjI1MTIsImV4cCI6MTc1ODU1ODUxMn0.LTtTGQCiLZLmoO38tK6-x9qo6eEsFu7rDbUnWOAF5pQ'
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export { createUserAPI, fetchAllUserAPI };