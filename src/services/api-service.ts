import AXIOS from 'axios';
import Parameters from './parameters';


function getPublicInstance() {
    return AXIOS.create({
        // @ts-ignore
        'accept': 'application/json',
        'baseURL': Parameters.ApiUrl,
        'headers': {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}

function getProtectedInstance() {
    let user = localStorage.getItem('user') as string;
    let token = '';
    if (user) {
        token = JSON.parse(user).token;
    } else {
        window.location.href = '/login';
    }
    return AXIOS.create({
        // @ts-ignore
        'accept': 'application/json',
        'baseURL': Parameters.ApiUrl,
        'headers': {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
}

function handleErrors(error: any) {
    let message = 'Something went wrong!!';
    if (error && error.response && error.response.data) {
        const data = error.response.data;
        if (data.error) {
            message = data.error;
        } else if (data.message) {
            const keys = Object.keys(data.message)
            if (keys.length) {
                message = data.message[keys[0]];
            }
        }
    }
    return message;
}


async function getMarkerData(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/testquery', params)
}

//auth
async function login(email: string, password: string) {
    const instance = getPublicInstance();
    return await instance.post('/api/login', {email, password});
}

async function self() {
    const instance = getProtectedInstance();
    return await instance.get('/api/self');
}

//funds
async function getFunds(params: any = {}) {
    const instance = getProtectedInstance();
    return await instance.get('/api/funds', {params})
}

async function createFund(params: any) {
    const instance = getProtectedInstance();
    return await instance.post('/api/funds', params)
}

async function updateFund(id: number, params: any = {}) {
    const instance = getProtectedInstance();
    return await instance.put(`/api/funds/${id}`, params)
}

async function deleteFund(id: number, params: any = {}) {
    const instance = getProtectedInstance();
    return await instance.delete(`/api/funds/${id}`, {params})
}

const API_SERVICE = {
    getMarkerData,

    login,
    self,
    handleErrors,
    getFunds,
    createFund,
    updateFund,
    deleteFund,
};
export default API_SERVICE;
