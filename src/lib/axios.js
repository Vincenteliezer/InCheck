import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_SHEETLABS_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    withXSRFToken: true
})

export default axios
