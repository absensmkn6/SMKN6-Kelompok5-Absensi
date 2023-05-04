import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const handleLogin = () => {
        const level = document.getElementById('level').value;
        switch (level) {
            case 'Guru':
                history.push('/guru/dashboard');
                break;
            case 'Siswa':
                history.push('/siswa/dashboard');
                break;
            case 'Admin':
                history.push('/admin/dashboard');
                break;
            default:
                alert('Silahkan Pilih User');
        }
    };
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-purple-600/60 ring ring-2 ring-purple-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Absensi
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input type="email" id='email' placeholder='Email' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input type="password" id='password' placeholder='Password' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                            Level
                        </label>
                        <select id='level' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                            <option value="" selected disabled>Silahkan Pilih User</option>
                            <option value="Guru">Guru</option>
                            <option value="Siswa">Siswa</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className="mt-6">
                        <button onClick={handleLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
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
    );
}

export default Login;
