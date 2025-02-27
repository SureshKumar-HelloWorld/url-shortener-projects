import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    }= useForm({
        defaultValues:{
            username:"",
            email:"",
            password:"",
        },
          mode:"onTouched",  
    });
    const registerHandler = async (data) => {
        // setLoader(true);
        // try{
        //     const {data:response}=await api
        // }

    }
  return (
    <div className='min-h-[calc(100vh-4rem)] flex items-center justify-center'>
        <form onSubmit={handleSubmit(registerHandler)}
        className='sm:w-[450px] w-[360px] shadow-custom py-8 sm:px- px-4 rounded-md'>
          <h1 className='text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl'> 
           Register Here
        </h1>
        <hr className='mt-2 mb-5 text-black'/>
        <div className='flex flex-col gap-4'>
            <TextField
              label="userName"
                required
                id="username"
                type="text"
                message="Username is required"
                placeholder="Type your username"
                register={register}
                errors={errors}
                />

                <TextField
                label="Email"
                required
                id="email"
                type="email"
                message="+Email is required"
                placeholder="Type your email"
                register={register}
                errors={errors}
                />

                <TextField
                label="Password"
                required
                id="password"
                type="password"
                message="Password is required"
                placeholder="Type your password"
                register={register}
                min={6}
                errors={errors}
                />
            </div>
          </form>
        </div>
  )
}

export default RegisterPage