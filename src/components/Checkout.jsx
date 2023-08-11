import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useLocation } from 'react-router-dom';

export default function Checkout() {
 const  location=useLocation();
  const data = location.state.data.data;
  // JSON.parse(data);
  console.log(data);
  console.log(typeof(data));
    const handleToken = () =>{
        
    }
  return (
    <div>
        {
          data?.map((value, index)=>{
            return(
              <div key={index}>
                <h1> {value}</h1>
             </div>
            )
          })
        }
        <StripeCheckout
            stripeKey='pk_test_51NdeOaSGCK8LPxYwpgifAv7fD1BeNSPlwYyInJ5iUubzHFCpbmQUdh6Dv0OWrAVOeyKVZitUeZEXsBMgBrl7J5KW00xR9sBw4A'
            token={handleToken}
            amount={data}
        />
    </div>
  )
}
