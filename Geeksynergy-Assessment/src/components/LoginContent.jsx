import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import Navbar from './Navbar';

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm()

    const navigate = useNavigate()
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('data'))
        if(user) {
          navigate('/')
        }
    },[])

    const inputStyle = 'w-[80%] mx-auto my-4 text-sm pl-2 border py-2 rounded-lg'
    const errMsg = 'text-red-700' 

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem('data'))
        if(data?.name === userData?.name) {
            if(data?.password === userData?.password) {
                toast.success("Successfully Logged in", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate('/')
            } else {
                toast.error("Invalid password", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } else {
            toast.error("User does not exist. Login with another name or Signup.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }
  return (
    <>
    <Navbar login={true} />
    
    <div className='w-[70%] h-full mt-32 mx-auto flex justify-center items-center '>
        <form onSubmit={handleSubmit(onSubmit)} className='w-[50%] bg-slate-200 text-center items-center rounded-lg shadow-lg'>
                <p className='my-8 uppercase text-2xl font-bold'>Login</p>
                <input
                    className={inputStyle}
                    type='text'
                    placeholder='NAME'
                    {...register("name", {
                        required: "This field is required.",
                        maxLength: { value: 15, message: "Max length is 15 characters." }
                    })}
                />
                {errors.name && (
                    <p className={errMsg}>
                        {errors.name.message}
                    </p>
                )}
                <input
                    className={inputStyle}
                    type='password'
                    placeholder='PASSWORD'
                    {...register("password", {
                        required: "This field is required.",
                    })}
                />
                {errors.password && (
                    <p className={errMsg}>
                        {errors.password.message}
                    </p>
                )}
                <br />
                <button
                    className='py-2 px-5 bg-gray-800 text-white mt-2 mb-4 rounded-lg hover:bg-green-500'
                    type='submit'
                >Login</button>
                <p className='mb-6 cursor-pointer hover:underline ' onClick={() => navigate('/signup')}>Signup</p>
            </form>  
    </div>
    </>
  )
}

export default Login