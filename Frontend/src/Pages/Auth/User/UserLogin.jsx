import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../../assets/uber_logo.png';
import { FaArrowRight } from 'react-icons/fa6';


function UserLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <div className='w-full h-screen flex flex-col justify-between'>
      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className='px-5 flex flex-col gap-4 py-6'>
        <img className='w-25' src={logo} alt="uber logo" />

        {/* Email */}
        <div>
          <span className='font-semibold text-xl flex mb-1'>Email</span>
          <input
            className='p-2 text-xl w-full rounded-md bg-gray-200 border border-gray-300'
            type="email"
            placeholder='Enter your Email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email'
              }
            })}
          />
          {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <span className='font-semibold text-xl flex mb-1'>Password</span>
          <input
            className='p-2 text-xl w-full rounded-md bg-gray-200 border border-gray-300'
            type="password"
            placeholder='Enter your Password'
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
          />
          {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
        </div>

        {/* Terms Checkbox */}
        <div className="space-x-3">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600"
            {...register('terms', { required: 'You must agree to the terms' })}
          />
          <span className="text-xl text-gray-700">Terms and Conditions follow</span>
          {errors.terms && <p className='text-red-600 text-sm mt-1'>{errors.terms.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className='bg-zinc-950 rounded-md py-2 text-center text-lg text-white font-bold'>
          Login
        </button>
        <div className='flex items-center justify-center gap-2'>
          <p>New User</p>
          <Link to="/user-signup" className='text-blue-500 hover:underline'>SignUp User</Link>
        </div>
      </form>

      {/* SECTION bottom */}
      <section className='p-5'>
        <div className='flex bg-blue-500 w-full items-center px-4 py-3 rounded-lg'>
          <Link className='w-full text-center text-lg text-white font-bold' to="/caption-login">Capion Login</Link>
          <FaArrowRight size="25px" color='white' />
        </div>
      </section>
    </div>
  );
}

export default UserLogin;
