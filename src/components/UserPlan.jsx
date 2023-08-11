import React, { useEffect, useState } from 'react';
import {fetchPlan} from "../operations/userPlan";
import { useNavigate } from 'react-router-dom';
import { apiConnector } from '../services/apiconnector';
import { api } from '../services/apis';

const {
  GET_SINGLE_PLAN_API
}=api;

export default function UserPlan() {
  // const history=useHistory();
  const [key, setKey]=useState(0);
  const navigate = useNavigate();
  const [isActive, setIsActive]=useState(true);
  const [planType, setPlanType]=useState("monthly");
  const [singlPlanData, setSinglPlanData]=useState(["basic", 100, "480p", "Good", "mobile"]);
  const [planData, setPlanData]=useState([]);
  const [planCategory, setPlanCategory]=useState("basic");
  
  useEffect(()=>{
    (async () => {
      try {
        const res = await fetchPlan();
        // console.log("course details res: ", res)
        setPlanData(res)
        console.log("plan = "+JSON.stringify(singlPlanData));
        // console.log(key);
      } catch (error) {
        console.log("Could not fetch plan")
      }
      return;
    })()
  },[key]);
    
  const clickHandler = async(id) =>{
      console.log(id);
      try{
        const response = await apiConnector("POST", GET_SINGLE_PLAN_API, {
          id:id
        });
        if(response.data.success){
          setSinglPlanData(response.data);
          
          console.log("single planed fetched.");
        }
      }catch(error){
        console.log(error);
      }
  }
    const getPlanData = (data) =>{
          console.log("plan data "+data);
    }
    const submitHandler = (singlPlanData) => {
      navigate('/checkout', { state: {
         data:singlPlanData
     } });
    }
      return (
        <div className="container grid mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">choose the right plan for you</h2>
          <div className='m-auto '>
        <table>
          <thead>
            <tr>
              <td>
              <div className='p-2 rounded-full bg-purpleblue-100 text-white'>
                    <button className={`${isActive ? 'bg-white text-blue-200 rounded-full' : ''} p-2`}
            onClick={() => {setIsActive(true); setPlanType("monthly")}}>
                Monthly
            </button>
            <button className={`${!isActive ? 'bg-white text-blue-200 rounded-full' : ''} p-2 `}
            onClick={() => {setIsActive(false); setPlanType("yearly")}}
            >
                Yearly
            </button>
          </div>
          </td>
          {
            planData.map((value, index)=>{
              return(
                
                 <td key={index} className=' bg-purpleblue-100 rounded-lg text-white ml-4'><button onClick={()=>{clickHandler(value._id); setKey(value._id)}}>{value.planName}</button></td>
              )
            })
          }
            </tr>
            <tr className='border-b'>
              <td>
                {
                planType=="monthly" ? <p>Monthly Price</p> : <p>Yearly Price</p>
                }
              </td>
              {
                planType==="monthly" ? (
                  planData.map((value, index)=>{
                    return <td key={index}>{value.monthlyPrice}</td>
                  })
                ) : (
                  planData.map((value, index)=>{
                    return <td key={index}>{value.yearlyPrice}</td>
                  })
                )
              }
            </tr>
            <tr className='border-b'>
              <td>
                <p>Video Quality</p>
              </td>
              {
                  planData.map((value, index)=>{
                    return <td key={index}>{value.videoQuality}</td>
                  })
              }
            </tr>
            <tr className='border-b'>
              <td>
                <p>Resolution</p>
              </td>
              {
                  planData.map((value, index)=>{
                    return <td key={index}>{value.resolution}</td>
                  })
              }
            </tr>
            <tr className='border-b'>
              <td>
                <p>Devices you can use</p>
              </td>
              {
                  planData.map((value, index)=>{
                    return (<td className='p-2' key={index}>{value.devices}<br/></td>)
                  })
              }              
            </tr>
          </thead>
        </table>
        <button onClick={()=>{submitHandler(singlPlanData)}} className='mt-12 text-white w-[40%] cursor-pointer m-auto bg-purpleblue-100 p-4 rounded-lg'>Next</button>
      </div>         
    </div>
      );  
}
