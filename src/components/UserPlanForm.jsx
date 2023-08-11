import React, { useState } from 'react';
import axios from 'axios';
import { api } from '../services/apis';
import { apiConnector } from '../services/apiconnector';
const{
  CREATE_PLAN_API,
}=api;

const UserPlanForm = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedVideoQuality, setSelectedVideoQuality] = useState('');
  const [selectedResolution, setSelectedResolution] = useState('');
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [selectedScreens, setSelectedScreens] = useState('');

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleVideoQualityChange = (event) => {
    setSelectedVideoQuality(event.target.value);
  };

  const handleResolutionChange = (event) => {
    setSelectedResolution(event.target.value);
  };

  const handleDeviceChange = (event) => {
    const value = event.target.value;
    setSelectedDevices((prevDevices) =>
      prevDevices.includes(value)
        ? prevDevices.filter((device) => device !== value)
        : [...prevDevices, value]
    );
  };

  const handleScreensChange = (event) => {
    setSelectedScreens(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData={
        selectedPlan,
        selectedPrice,
        selectedVideoQuality,
        selectedResolution,
        selectedDevices,
        selectedScreens
    }
    console.log(formData);
    // Process the form data here
    try{
      const response = await apiConnector("POST", CREATE_PLAN_API, formData);
      if(response.data.success){
        console.log("plan created successful.");
      }
    }catch(error){
      console.log(error);
    }
           
  }

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium">Select Plan Name:</label>
          <select
            className="form-select mt-1 block w-full border border-gray-300 rounded"
            onChange={handlePlanChange}
            value={selectedPlan}
          >
            <option value="">Select a Plan</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Regular">Regular</option>
          </select>
        </div>
        
        {/* Price */}
        <div>
          <label className="block font-medium">Select Price:</label>
          <select
            className="form-select mt-1 block w-full border border-gray-300 rounded"
            onChange={handlePriceChange}
            value={selectedPrice}
          >
            <option value="">Select a Price</option>
            <option value="100">100 INR</option>
            <option value="200">200 INR</option>
            <option value="500">500 INR</option>
            <option value="700">700 INR</option>
          </select>
        </div>
        
        {/* Video Quality */}
        <div>
          <label className="block font-medium">Select Video Quality:</label>
          <select
            className="form-select mt-1 block w-full border border-gray-300 rounded"
            onChange={handleVideoQualityChange}
            value={selectedVideoQuality}
          >
            <option value="">Select Video Quality</option>
            <option value="Good">Good</option>
            <option value="Better">Better</option>
            <option value="Best">Best</option>
          </select>
        </div>
        
        {/* Resolution */}
        <div>
          <label className="block font-medium">Select Resolution:</label>
          <select
            className="form-select mt-1 block w-full border border-gray-300 rounded"
            onChange={handleResolutionChange}
            value={selectedResolution}
          >
            <option value="">Select Resolution</option>
            <option value="480p">480p</option>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
            <option value="4k">4K+HDR</option>
          </select>
        </div>
        
        {/* Devices */}
        <div>
          <label className="block font-medium">Select Devices:</label>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                value="Computer"
                onChange={handleDeviceChange}
                checked={selectedDevices.includes('Computer')}
              />
              <span className="ml-2">Computer</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                value="Phone"
                onChange={handleDeviceChange}
                checked={selectedDevices.includes('Phone')}
              />
              <span className="ml-2">Phone</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                value="Tablet"
                onChange={handleDeviceChange}
                checked={selectedDevices.includes('Tablet')}
              />
              <span className="ml-2">Tablet</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                value="TV"
                onChange={handleDeviceChange}
                checked={selectedDevices.includes('TV')}
              />
              <span className="ml-2">TV</span>
            </label>
          </div>
        </div>
        {/* Number of Screens */}
        <div>
          <label className="block font-medium">Select Number of Screens:</label>
          <select
            className="form-select mt-1 block w-full border border-gray-300 rounded"
            onChange={handleScreensChange}
            value={selectedScreens}
          >
            <option value="">Select Number of Screens</option>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default UserPlanForm;
