const UserPlan = require("../models/UserPlan");

exports.createUserPlan = async (req, res) => {
    console.log("req "+req);
    const {planName, monthlyPrice, yearlyPrice, videoQuality, resolution, devices, activeScreens}=req.body;
    
    try{
        if(!planName || !monthlyPrice || !yearlyPrice || !videoQuality || !resolution || !devices || !activeScreens){
            return res.status(400).json({
                success:false,
                message:"All fielld are requied"
            })
        }
        const res = await UserPlan.create({
            planName:planName,
            monthlyPrice:monthlyPrice,
            yearlyPrice:yearlyPrice,
            videoQuality:videoQuality,
            resolution:resolution,
            devices:devices,
            activeScreens:activeScreens
        })
        return res.status(200).json({
            success:true,
            data:res,
            message:"UserPlan created Successfully"
        })
    }
    catch(error){
        console.log(error);
    }
}

exports.fetchPlan = async(req, res)=>{
    let result=[];
    try{
        result = await UserPlan.find();
        console.log("result in controller "+result);
        if(result.length>0){
            return res.status(200).json({
                message:"User Plan fetched.",
                data:result,
                success:true
            })
        }
        else{
            return res.status(400).json({
                message:"No Plan found.",
                success:false
            })
        }
    }catch(error){
        console.log("error in fetching plan "+error);
    }
}

exports.fetchPlanById = async(req, res)=>{
    let result=null;
    const {id}=req.body;
    try{
        result = await UserPlan.findById(id);
        console.log("result in controller "+result);
        if(result){
            return res.status(200).json({
                message:"User Plan fetched.",
                data:result,
                success:true
            })
        }
        else{
            return res.status(400).json({
                message:"No Plan found.",
                success:false
            })
        }
    }catch(error){
        console.log("error in fetching plan "+error);
    }
}