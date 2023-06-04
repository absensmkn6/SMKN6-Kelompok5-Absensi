import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginpict from '../images/loginpict.png';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
// import Dashboard from './dashboard/dashboard';

const Register = () => {

  const [nama, setnama] = useState('')
  const [email, setemail] = useState('')
  const [nohp, setnohp] = useState('')
  const [alamat, setalamat] = useState('')
  const [gender, setgender] = useState('')
  const [tanggal_lahir, settgl] = useState('')
  const [password, setpassword] = useState('')
  const [confPassword, setconfpassword] = useState('')
  const [role, setrole] = useState('')
  const [user_kode, setuser_kode] = useState('')
  const [msg, setMsg] = useState("");
  
  // const [ttl, setttl] = useState('')
  
  
  const history = useHistory();
  
          // JANGAN DIHAPUS
  const handleSubmit = async (e) => {
      e.preventDefault();
      try{
      
        await axios.post('http://localhost:5000/user', {nama, email, nohp, alamat, gender, tanggal_lahir, password, confPassword, role, user_kode});
  
        history.push('/login');
     
      } catch (error) {
        console.log(error);
      }
    
  }

    return (
        <>
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
            
              <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
              <p className="text-xs mt-4 text-[#002D74]">
            
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" >

              <input
                  className="p-2 mt-8 rounded-xl border"
                  type="number"
                  name="user_kode"
                  id='user_kode'
                  placeholder="NIS" value={user_kode} onChange={e => setuser_kode(e.target.value)}/>
                
                <input
                  className="p-2 rounded-xl border"
                  type="text"
                  name="nama"
                  id='nama'
                  placeholder="Nama"  value={nama} onChange={e => setnama(e.target.value)}/>

                 <input
                  className="p-2  rounded-xl border"
                  type="email"
                  name="email"
                  id='email'
                  placeholder="Email"  value={email} onChange={e => setemail(e.target.value)}
                 
                />

                  <input
                  className="p-2 rounded-xl border"
                  type="number"
                  name="nohp"
                  id='nohp'
                  placeholder="No Handphone"  value={nohp} onChange={e => setnohp(e.target.value)}/>

                  <input
                  className="p-2 rounded-xl border"
                  type="text"
                  name="alamat"
                  id='alamat'
                  placeholder="Alamat"  value={alamat} onChange={e => setalamat(e.target.value)}/>

                  <select
                  className="p-2 rounded-xl border"
                  type="text"
                  name="gender"
                  id='gender'
                  placeholder="Jenis Kelamin" value={gender} onChange={e => setgender(e.target.value)}>
                    <option selected>Jenis Kelamin</option>
                    <option value="L">Laki - Laki</option>
                    <option value="P">Perempuan</option>
                  </select>

                  <input
                  className='p-2 rounded-xl border'
                  type='date'
                  name='tanggal_lahir'
                  id='tanggal_lahir'
                  placeholder='Tanggal Lahir' onChange={e => settgl(e.target.value)}/>

                  <select
                  className="p-2 rounded-xl border"
                  name="role"
                  id='role'
                  placeholder="Jenis Kelamin" value={role} onChange={e => setrole(e.target.value)}>
                    <option selected>Role</option>
                    <option value="siswa">Siswa</option>
                  </select>
                  
                <div className="relative">

               
                  <input
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    name="password"
                    placeholder="Password"
                    id='password' onChange={e => setpassword(e.target.value)} value={password}
                    
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
                <input
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    name="confPassword"
                    placeholder="Confirm Password"
                    id='password' onChange={e => setconfpassword(e.target.value)} value={confPassword}
                    
                  />
                <button  type='submit' className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" >
                Sign Up
                </button>
              </form>
              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
              </div>
              <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                    <Link to="/login" className="font-medium text-purple-600 hover:underline">
                        Login
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
        {/* <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-purple-600/60 ring ring-2 ring-purple-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                   Absensi
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label for="text" className="block text-sm font-semibold text-gray-800">
                            Nama
                        </label>
                        <input type="text" id='nama' placeholder='Nama' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label for="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input type="email" id='email' placeholder='Email' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label for="password" className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input type="password" id='password' placeholder='Password' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    
                    <div className="mt-6">
                        <Link to="/login">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Register
                        </button>
                        </Link>
                        
                        
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Sudah punya Akun?{" "}
                    <Link to="/login" className="font-medium text-purple-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div> */}
        </>
    );
}

export default Register;