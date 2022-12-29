import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
const {user, logOut} = UserAuth()
const navigate = useNavigate()
console.log(user)

const handleLogOut = async () => {
  try {
    await logOut()
    navigate('/')
    alert("Succesfully Logged Out")
  } catch(error){
    console.log(error)
  }
}

    return(
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
            <Link to='/'>
            <img src="https://cdn.discordapp.com/attachments/1055128031137640481/1056771768813092904/logo.png" alt="Netflix" style={{width: 200}}></img>
            </Link>
        {user?.email ? 
         <div>
                <Link to='/account'>
                <button className="bg-black-600 px-6 py-2 rounded cursor-pointer text-white" >Account</button>
                </Link>
          <Link to='/signup'>
            <button onClick={handleLogOut} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Log Out
            </button>
          </Link>
            </div> :
                <div>
                <Link to='/Login'>
                <button className="bg-black-600 px-6 py-2 rounded cursor-pointer text-white" >Sign In</button>
                </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
            </div>
            }
        </div>
        
    )
}

export default Navbar