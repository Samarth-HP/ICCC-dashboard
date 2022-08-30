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


async function getDistrictMarkerData(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/district_master_latlong', params)
}

async function getBlockMarkerData(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/block_master_latlong', params)
}

async function getSchoolMarkerData(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/school_master_latlong', params)
}

async function searchSchoolData(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/school_search', params)
}

async function getDistrictAttendance(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/district_attendance', params)
}

async function getDistrictEnrolment(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/district_enrolment', params)
}

async function getDistrictPTR(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/district_ptr', params)
}

async function getDistrictCWSN(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/district_cwsn', params)
}

async function getBlockAttendance(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/block_attendance', params)
}

async function getBlockEnrolment(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/block_enrolment', params)
}

async function getBlockPTR(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/block_ptr', params)
}

async function getBlockCWSN(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/block_cwsn', params)
}

async function getSchoolAttendance(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/school_attendance', params)
}

async function getSchoolEnrolment(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/school_enrolment', params)
}

async function getSchoolPTR(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/school_ptr', params)
}

async function getSchoolCWSN(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/school_cwsn', params)
}
async function getDistrictAttendanceBoundary(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/district_attendance_boundary', params)
}
async function getBlockAttendanceBoundary(params: any) {
    const instance = getPublicInstance();
    return await instance.post('/query/block_attendance_boundary', params)
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


const API_SERVICE = {
    getDistrictMarkerData,
    getBlockMarkerData,
    getSchoolMarkerData,
    searchSchoolData,
    getDistrictAttendance,
    getDistrictEnrolment,
    getDistrictPTR,
    getDistrictCWSN,
    getBlockAttendance,
    getBlockEnrolment,
    getBlockPTR,
    getBlockCWSN,
    getSchoolAttendance,
    getSchoolEnrolment,
    getSchoolPTR,
    getSchoolCWSN,
    getDistrictAttendanceBoundary,
    getBlockAttendanceBoundary,

    login,
    self,
    handleErrors,
};
export default API_SERVICE;
