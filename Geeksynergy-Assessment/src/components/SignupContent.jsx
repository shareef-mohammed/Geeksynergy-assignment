import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Signup = () => {
    const [data, setData] = useState({});

    const navigate = useNavigate()
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('data'))
        if(user) {
          navigate('/')
        }
    },[])

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm()

    const inputStyle = 'w-[80%] mx-auto my-4 text-sm pl-2 border py-2 rounded-lg'
    const errMsg = 'text-red-700' 

    const onSubmit = (data) => {
        setData(data);
        localStorage.setItem('data', JSON.stringify(data));
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
        
    }

    return (
        <div className='w-[70%] h-[90%] mx-auto flex justify-center items-center mt-16' >
            <form onSubmit={handleSubmit(onSubmit)} className='w-[50%] bg-slate-200 text-center items-center rounded-lg shadow-lg'>
                <p className='my-8 uppercase text-2xl font-bold'>Signup</p>
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
                    type='text'
                    placeholder='EMAIL'
                    {...register("email", {
                        required: "This field is required.",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid Email address."
                        }
                    })}
                />
                {errors.email && (
                    <p className={errMsg}>
                        {errors.email.message}
                    </p>
                )}

                <input
                    className={inputStyle}
                    type='text'
                    placeholder='PHONE'
                    {...register("phone", {
                        required: "This field is required.",
                        pattern: {
                            value: /^[0-9\b]+$/,
                            message: "Invalid phone number."
                        }
                    })}
                />
                {errors.phone && (
                    <p className={errMsg}>
                        {errors.phone.message}
                    </p>
                )}

                <input
                    className={inputStyle}
                    type='password'
                    placeholder='PASSWORD'
                    {...register("password", {
                        required: "This field is required.",
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                            message: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
                        }
                    })}
                />
                {errors.password && (
                    <p className={errMsg}>
                        {errors.password.message}
                    </p>
                )}
                <br />
                <button
                    className='py-2 px-5 bg-gray-800 text-white mb-4 mt-2 rounded-lg hover:bg-green-500'
                    type='submit'
                >Signup</button>
                <p className='mb-6 cursor-pointer hover:underline ' onClick={() => navigate('/login')}>Login</p>
            </form>
        </div>
    )
}

export default Signup
