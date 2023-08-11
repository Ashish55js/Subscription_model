const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const api = {
  SIGNUP_API: BASE_URL + "/signup",
  LOGIN_API: BASE_URL + "/login",
  CREATE_PLAN_API : BASE_URL+"/createPlan",
  GET_USER_PLAN_API : BASE_URL+"/fetchPlan",
  GET_SINGLE_PLAN_API : BASE_URL+"/fetchPlanById",
}