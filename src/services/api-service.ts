import axios from "axios";
import AXIOS, { Axios } from "axios";
import Parameters from "./parameters";

function getPublicInstance() {
  return AXIOS.create({
    // @ts-ignore
    accept: "application/json",
    baseURL: Parameters.ApiUrl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

const getLoginInstance = () => {
  return AXIOS.create({
    // @ts-ignore
    accept: "application/json",
    // baseURL: "http://us-edb.samagra.io",
    baseURL: "https://run.mocky.io/v3/ac9efd42-d64f-487b-af64-410202013a6f",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

function getProtectedInstance() {
  let user = localStorage.getItem("user") as string;
  let token = "";
  if (user) {
    token = JSON.parse(user).token;
  } else {
    window.location.href = "/login";
  }
  return AXIOS.create({
    // @ts-ignore
    accept: "application/json",
    baseURL: Parameters.ApiUrl,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}

function handleErrors(error: any) {
  let message = "Something went wrong!!";
  if (error && error.response && error.response.data) {
    const data = error.response.data;
    if (data.error) {
      message = data.error;
    } else if (data.message) {
      const keys = Object.keys(data.message);
      if (keys.length) {
        message = data.message[keys[0]];
      }
    }
  }
  return message;
}

async function getDistrictMarkerData(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_master_latlong", params);
}

async function getBlockMarkerData(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_master_latlong", params);
}

async function getSchoolMarkerData(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_master_latlong", params);
}

async function searchSchoolData(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_search", params);
}

async function getDistrictAttendance(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_attendance", params);
}

async function getDistrictEnrolment(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_enrolment", params);
}

async function getDistrictPTR(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_ptr", params);
}

async function getDistrictCWSN(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_cwsn", params);
}

async function getBlockAttendance(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_attendance", params);
}

async function getBlockEnrolment(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_enrolment", params);
}

async function getBlockPTR(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_ptr", params);
}

async function getBlockCWSN(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_cwsn", params);
}

async function getSchoolAttendance(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_attendance", params);
}

async function getSchoolEnrolment(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_enrolment", params);
}

async function getSchoolPTR(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_ptr", params);
}

async function getSchoolCWSN(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_cwsn", params);
}
async function getDistrictAttendanceBoundary(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_attendance_boundary", params);
}
async function getBlockAttendanceBoundary(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_attendance_boundary", params);
}

// Student Assesment 4-8 by vinay maheshwari

async function getStudentAssesmentBlock1Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_assessment_4to8", params);
}

async function getStudentAssesmentBlock2Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_sa1_4to8", params);
}
async function getStudentAssesmentBlock3Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_sa2_4to8", params);
}
async function getStudentAssesmentBlock4Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_assessment_change_4to8", params);
}
async function getStudentAssesmentBlock5Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_assessment_gradewise_4to8", params);
}

async function getStudentAssesmentDistrict1Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_assessment_4to8", params);
}

async function getStudentAssesmentDistrict2Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_sa1_4to8", params);
}

async function getStudentAssesmentDistrict3Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_sa2_4to8", params);
}

async function getStudentAssesmentDistrict4Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_assessment_change_4to8", params);
}

async function getStudentAssesmentDistrict5Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post(
    "/query/district_assessment_gradewise_4to8",
    params
  );
}

async function getStudentAssesmentSchool1Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_assessment_4to8", params);
}

async function getStudentAssesmentSchool2Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_sa1_4to8", params);
}

async function getStudentAssesmentSchool3Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_sa2_4to8", params);
}

async function getStudentAssesmentSchool4Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_assessment_change_4to8", params);
}

async function getStudentAssesmentSchool5Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_assessment_gradewise_4to8", params);
}
// 4-8 end

// 1-3 start
async function getStudentAssesmentBlock1Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_assessment_1to3", params);
}

async function getStudentAssesmentBlock2Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_enrolment_1to3", params);
}
async function getStudentAssesmentBlock3Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_sa1_1to3", params);
}
async function getStudentAssesmentBlock4Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_sa2_1to3", params);
}
async function getStudentAssesmentBlock5Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/block_nipun", params);
}

async function getStudentAssesmentDistrict1Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_assessment_1to3", params);
}

async function getStudentAssesmentDistrict2Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_enrolment_1to3", params);
}

async function getStudentAssesmentDistrict3Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_sa1_1to3", params);
}
async function getStudentAssesmentDistrict4Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_sa2_1to3", params);
}

async function getStudentAssesmentDistrict5Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_nipun", params);
}

async function getStudentAssesmentSchool1Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_assessment_1to3", params);
}

async function getStudentAssesmentSchool2Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_enrolment_1to3", params);
}

async function getStudentAssesmentSchool3Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_sa1_1to3", params);
}
async function getStudentAssesmentSchool4Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_sa2_1to3", params);
}
async function getStudentAssesmentSchool5Grade13(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/school_nipun", params);
}

// 1-3 end
// vinay end

//auth
async function login(email: string, password: string) {
  const instance = getPublicInstance();
  return await instance.post("/api/login", { email, password });
}

async function self() {
  const instance = getProtectedInstance();
  return await instance.get("/api/self");
}

// Login start
// By Vinay Mahshwari
async function Login(params: any) {
  const instance = getLoginInstance();
  console.log({
    ...params,
    applicationId: Parameters.applicationId,
  });

  return await instance.post("/user/login", {
    ...params,
    applicationId: Parameters.applicationId,
  });
}
// Login end

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
  getStudentAssesmentBlock1Grade48,
  getStudentAssesmentBlock2Grade48,
  getStudentAssesmentBlock3Grade48,
  getStudentAssesmentBlock4Grade48,
  getStudentAssesmentBlock5Grade48,
  getStudentAssesmentDistrict1Grade48,
  getStudentAssesmentDistrict2Grade48,
  getStudentAssesmentDistrict3Grade48,
  getStudentAssesmentDistrict4Grade48,
  getStudentAssesmentDistrict5Grade48,
  getStudentAssesmentSchool1Grade48,
  getStudentAssesmentSchool2Grade48,
  getStudentAssesmentSchool3Grade48,
  getStudentAssesmentSchool4Grade48,
  getStudentAssesmentSchool5Grade48,
  getStudentAssesmentBlock1Grade13,
  getStudentAssesmentBlock2Grade13,
  getStudentAssesmentBlock3Grade13,
  getStudentAssesmentBlock4Grade13,
  getStudentAssesmentBlock5Grade13,
  getStudentAssesmentDistrict1Grade13,
  getStudentAssesmentDistrict2Grade13,
  getStudentAssesmentDistrict3Grade13,
  getStudentAssesmentDistrict4Grade13,
  getStudentAssesmentDistrict5Grade13,
  getStudentAssesmentSchool1Grade13,
  getStudentAssesmentSchool2Grade13,
  getStudentAssesmentSchool3Grade13,
  getStudentAssesmentSchool4Grade13,
  getStudentAssesmentSchool5Grade13,

  // login,
  Login,
  self,
  handleErrors,
};
export default API_SERVICE;
