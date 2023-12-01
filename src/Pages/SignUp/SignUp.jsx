import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hook/useAxiosPublic';

const SignUp = () => {
  const axiosPublic=useAxiosPublic()
    const { createUser,updateUserProfile,googleSignIn }=useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoogleSignIn = () =>{
      googleSignIn()
      .then(result =>{
          console.log(result.user);
          const userInfo = {
              email: result.user?.email,
              name: result.user?.displayName,
              photo: result.user?.photoURL,
          }
          axiosPublic.post('/users', userInfo)
          .then(res =>{
              console.log(res.data);
              navigate('/');
          })
      })
  }
    const handleSignUp =e=>{
     e.preventDefault()
    const form=e.target 
    const email=form.email.value 
    const password =form.password.value 
   const name=form.username.value
   const photoUrl=form.photourl.value
   createUser(email,password)
   .then(result=>{
       const loggeduser=result.user 
       console.log(loggeduser)
       updateUserProfile(name,photoUrl)
       .then(()=>{
        const userInfo={
            name:name ,
            email:email ,
            photo:photoUrl
        }
       axiosPublic.post("/users",userInfo)
       .then(res=>{
        if(res.data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/');
        }
       })
  
    })
     
       .catch(error=>console.log(error))
   })

  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to Tour</p>
        </div>
        <form onSubmit={handleSignUp}>
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='username'
                id='username'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                type='text'
                name='photourl'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
                            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              Continue
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
