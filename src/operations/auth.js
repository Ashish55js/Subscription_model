import { toast } from "react-hot-toast"
import { api } from "../services/apis"
import { apiConnector } from "../services/apiconnector"
import { useNavigate } from "react-router-dom";

const {
  SIGNUP_API,
  LOGIN_API,
} = api

export async function signUp(
  name, 
  email,
  password
) {
  return async () => {
    const navigate = useNavigate();
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        name,
        email,
        password,
      })
      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/signup")
    }
    toast.dismiss(toastId)
  }
}

export function login(email, password, navigate) {
  return async () => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })
      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Login Successful")
      
      navigate("/dashboard")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
  }
}

export function logout(navigate) {
  return () => {
    toast.success("Logged Out")
    navigate("/")
  }
}

