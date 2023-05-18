import { Link, useHistory } from 'react-router-dom';
import {LoginUser, reset} from '../features/authSlices';
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'



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
        </div>
        </motion.div>
    );
}

export default Login;
