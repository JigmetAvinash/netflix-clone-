import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, SetPassword] = useState('')
    const {user, logIn} = UserAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        }catch (error) {
            console.log(error)
            setError(error.message)
        }
    }
  return (
    <>
    <div className='w-full h-screen '>
        <img className='hidden sm:block absolute w-[120%] h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/fbb54774-ca17-4208-a995-db44bffe4163/IN-en-20221219-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
            <div className='fixed w-full px-4 py-24 z-50 '>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold '>Login</h1>
                        {error ? <p className='p-3 bg-red-400 my-2'>{error}</p>: null}
                        <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                            <input className='p-3 my-2 bg-gray-600 rounded'  type="email" placeholder='Email' autoComplete='email' onChange={(e) => setEmail(e.target.value)} />
                            <input className='p-3 my-2 bg-gray-600 rounded'  type="password" placeholder='Password' autoComplete='Current-Password' onChange={(e) => SetPassword(e.target.value)} />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold' >Sign In</button>
                            <p><input type="checkbox"/>    Remember Me</p>
                            <p className='py-4'><span className='text-gray-600'>New to Netflix Clone?</span> <Link to='/SignUp'> Sign Up for FREE </Link></p>
                            
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login