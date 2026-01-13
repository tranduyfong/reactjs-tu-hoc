import axios from "../services/axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user';
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2OTIxYWI4NGE5ZTVkMDQ2N2NiY2U5ZjYiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NjgzMzA0MDEsImV4cCI6MTc2ODM2NjQwMX0.XXPO-gsLoUMQd0iEDn0cTX1hDw2LyybAN9K1nYJEaGw'
    return axios.post(URL_BACKEND, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const updateUserAPI = (_id, fullName, phone) => {
    const URL_BACKEND = '/api/v1/user';
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2OTIxYWI4NGE5ZTVkMDQ2N2NiY2U5ZjYiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NjgzMzA0MDEsImV4cCI6MTc2ODM2NjQwMX0.XXPO-gsLoUMQd0iEDn0cTX1hDw2LyybAN9K1nYJEaGw'
    return axios.put(URL_BACKEND, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const fetchAllUserAPI = () => {
    const URL_BACKEND = '/api/v1/user';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2OTIxYWI4NGE5ZTVkMDQ2N2NiY2U5ZjYiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NjgzMzA0MDEsImV4cCI6MTc2ODM2NjQwMX0.XXPO-gsLoUMQd0iEDn0cTX1hDw2LyybAN9K1nYJEaGw'
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const deleteUserAPI = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2OTIxYWI4NGE5ZTVkMDQ2N2NiY2U5ZjYiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NjgzMzA0MDEsImV4cCI6MTc2ODM2NjQwMX0.XXPO-gsLoUMQd0iEDn0cTX1hDw2LyybAN9K1nYJEaGw'
    return axios.delete(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export { createUserAPI, fetchAllUserAPI, updateUserAPI, deleteUserAPI };