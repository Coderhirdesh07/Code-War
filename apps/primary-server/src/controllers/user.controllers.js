import {loginUser,logoutUser,createNewuser,getUserProfile,deleteUser} from "../services/user.services.js";


export async function handleCreateUser(request,response){
    try{
        const {fullname,username,email,password} = request.body;
        if(!fullname || !username || !email || password){
            return response.status(400).json({message:"Full Name or username or email or Password"});
        }

        const newUser = await userService.createUser(fullname,username,email,password);

        return response.status(200).json({message:"New User Created success",data:newUser});
    }
    catch(error){
        console.log("Internal Server Error");
        return response.status(500).json({message:"Internal Server error",data:null});
    }
}

export async function handleUserLogin(request,response){}

export async function handleUserLogout(request,response){}

export async function handleGetUserProfile(request,response){}

export async function handleDeleteUserProfile(request,response){}

