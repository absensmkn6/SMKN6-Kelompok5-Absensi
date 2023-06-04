import { Link, useHistory } from 'react-router-dom';
import {LoginUser, reset} from '../features/authSlices';
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import loginpict from '../images/loginpict.png';
import logoabsen from '../images/logoabsen.png';






// const Login = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const history = useHistory();


//     const Auth = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await axios.get(`http://localhost:5000/login`,{
//           email: email,
//           password: password
//         });

//         console.log(response.data);

//         if (response.data.role === 'admin') {
//           history.push('/admin/dashboard') 
//         }else if (response.data.role === 'guru'){
//           history.push('/guru/dashboard')
//         }else if (response.data.role === 'siswa'){
//           history.push('/siswa/dashboard')
//         }
//       } catch (error) {
//         console.log(error)
//       }


      

      // setnama(response.data.nama);
      // setkelas(response.data.kelas);
      // setjurusan(response.data.jurusan);
      // setalamat(response.data.alamat);
      // setgender(response.data.gender);
      // setnohp(response.data.nohp);
  
  // }
    // const dispatch = useDispatch();
    // const history = useHistory();
    // const { user, isError, isSuccess, isLoading, message } = useSelector(
    //   (state) => state.auth
    // );
  
    // useEffect(() => {
    //   if (user || isSuccess) {
    //     history.push("/siswa/dashboard");
    //   }
    //   dispatch(reset());
    // }, [user, isSuccess, dispatch, history]);
  
    // const Auth = (e) => {
    //   e.preventDefault();
    //   dispatch(LoginUser({ email, password }));
    // };

    const Login = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const dispatch = useDispatch();
      const history = useHistory();
      const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
      );
    
      useEffect(() => {
        if (user || isSuccess) {
          history.push("/dashboard");
        }
        
        dispatch(reset());
      }, [user, isSuccess, dispatch, history]);
    
      const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
      };
    

    return (
      <motion.div

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity:0 }}
          transition={{  duration: 2 }}
      >
        <section className=" min-h-screen flex items-center justify-center">
          {/* login container */}
          <div className="bg-gray-400 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          
            {/* form */}
            <div className="md:w-1/2 px-8 md:px-16">
            {/* <div className=" top-0 left-0 p-">
        <img
          src={logoabsen}
          alt="Logo"
          className="w-100 h-30"
        />
      </div> */}
            
              <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
              {isError &&  <p className="text-xs mt-4 text-[#FF0000]">
              {message}
              </p>}
              <form action="" className="flex flex-col gap-4" onSubmit={Auth}>
                <input
                  className="p-2 mt-8 rounded-xl border"
                  type="email"
                  name="email"
                  id='email'
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    name="password"
                    placeholder="Password"
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="gray"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </div>
                <button  type='submit' className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" >
                {isLoading ? "Loading..." : "Login"}
                </button>
              </form>
              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
              </div>
              <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                    <Link to="/register" className="font-medium text-purple-600 hover:underline">
                        Sign up
                    </Link>
              </button>
            </div>
            {/* image */}
            <div className="md:block hidden w-1/2">
              <img
                className="rounded-2xl"
                src={loginpict}
              />
            </div>
          </div>
        </section>


{/*         
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-purple-600/60 ring ring-2 ring-purple-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                  Absentra
                </h1>
                {isError && <p className="text-center text-red-700 mt-4 font-semibold">{message}</p>}

                 <form className="mt-6" onSubmit={Auth} >
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input type="email" id='email' placeholder='Email' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" value={email}
                      onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input type="password" id='password' placeholder='Password' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"  value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"> {isLoading ? "Loading..." : "Login"}
                        </button>
                    </div>
                </form> 
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to="/register" className="font-medium text-purple-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div> */}
        </motion.div>
    );
}

export default Login;
