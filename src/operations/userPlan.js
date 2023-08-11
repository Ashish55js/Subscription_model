import { toast } from "react-hot-toast"
import { apiConnector } from "../services/apiconnector"
import { api } from "../services/apis"

const{
    GET_USER_PLAN_API ,
    GET_SINGLE_PLAN_API
}=api;

export const fetchPlan = async () => {
    let result = []
    try {
      const response = await apiConnector("GET", GET_USER_PLAN_API);
      console.log("response in operation userplan "+response);
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch User plan")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("GET_ALL_PLAN API ERROR............", error)
      toast.error(error.message)
    }
    return result
  }

  export const fetchPlanById = async (id) => {
    let result = []
    try {
      const response = await apiConnector("POST", GET_SINGLE_PLAN_API, {id});
      console.log("single plan response "+JSON.stringify(response));
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch User plan")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("GET_ALL_PLAN API ERROR............", error)
      toast.error(error.message)
    }
    return result
  }