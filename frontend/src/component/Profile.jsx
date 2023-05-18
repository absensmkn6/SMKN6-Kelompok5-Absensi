import React from "react";
import avatar from '../images/avatar.png';
import Sidebar from "../component/Sidebar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlices";



const ProfileSiswa = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((state) => state.auth);
  
    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        history.push("/login");
      };

    return(
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Sidebar/>
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
   
            <div class="w-full md:w-3/12 md:mx-2">
           
                <div class="bg-violet-700 dark:bg-gray-800 rounded-md p-3 border-t-4 border-purple-900 dark:border-gray-400">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt=""/>
                    </div>
                    <h1 class="text-white font-bold text-xl leading-8 my-1"></h1>
                    <img src={avatar} alt="Profile Picture" className="rounded-full mb-2 mt-4 hidden md:block mx-auto block" width="120" height="120"/>
                    <h3 class="text-gray-300 font-lg text-semibold leading-6">Keterangan</h3>
                    <ul
                        class="bg-violet-700 dark:bg-gray-600 text-white hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Tahun Ajaran</span>
                            <span class="ml-auto">2023/2024</span>
                        </li>
                    </ul>
                </div>
          
                <div class="my-4"></div>
         
                <div class="bg-violet-700 dark:bg-gray-800 p-3 hover:shadow border-white rounded-md">


                    {/* The button to open modal */}
                    <label htmlFor="my-modal" className="btn bg-violet-700 dark:bg-gray-800 p-3 hover:shadow border-white rounded-md">Username dan password</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                    <div className="modal-box">
                    <form>
                                            <div class="card-body">
                                            <div class="form-group">
                                                <label>Username</label><br></br>
                                                <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" readOnly value={'17058'} />
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label><br></br>
                                                <input type="text" value={'17058'} className="input input-bordered mt-2 input-primary w-full max-w"readOnly />
                                            </div>
                                    </div>
                            </form>
                        <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Tutup</label>
                        </div>
                    </div>
                    </div>
                </div>
  
            </div>

            <div class="w-full md:w-9/12 mx-2 h-64">
              
                <div class="rounded-md bg-violet-700 dark:bg-gray-800 p-3 shadow-sm ">
                    <div class="flex items-center space-x-2 font-semibold text-white leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">Profile</span>
                    </div>
                    <div class="text-gray-400">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Nama Panggilan:</div>
                                <div class="px-4 py-2">{user && user.nama}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Nama Lengkap:</div>
                                <div class="px-4 py-2">{user && user.nama}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">NIS</div>
                                <div class="px-4 py-2">{user && user.user_kode}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Kelas:</div>
                                <div class="px-4 py-2">XI-RPL</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Jenis Kelamin:</div>
                                <div class="px-4 py-2">{user && user.gender}</div>
                            </div>
            
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">TTL:</div>
                                <div class="px-4 py-2">Solo, 01 januari 2006</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Alamat:</div>
                                <div class="px-4 py-2">{user && user.alamat}</div>
                            </div>
                           
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Telepon:</div>
                                <div class="px-4 py-2">{user && user.nohp}</div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="block w-full text-blue-500 text-sm font-semibold rounded-lg hover:bg-gray-400 focus:outline-none focus:shadow-outline focus:bg-gray-400 hover:shadow-xs p-3 my-4 dark:bg-gray-700 hover:bg-gray-900 ">Show
                        Full Information</button>
                </div>
             

                <div class="my-4"></div>

     
                <div class=" rounded-md bg-violet-700 to-violet-700 dark:bg-gray-800 p-3 shadow-sm">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-white leading-8 mb-3">
                                <span clas="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Ekstrakurikuler</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Pramuka</div>
                                    <div class="text-gray-500 text-xs">Aktif</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Paskibra</div>
                                    <div class="text-gray-500 text-xs">Aktif</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Rohis</div>
                                    <div class="text-gray-500 text-xs">Aktif</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">PMR</div>
                                    <div class="text-gray-500 text-xs">Aktif</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-white leading-8 mb-3">
                                <span clas="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Catatan Kedisiplinan</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Terlambat masuk sekolah atau absen tanpa keterangan</div>
                                    <div class="text-gray-500 text-xs">19-02-2023</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Melanggar aturan berpakaian yang berlaku di sekolah</div>
                                    <div class="text-gray-500 text-xs">01-10-2022</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    </div>
        </div>
     
    )
};

export default ProfileSiswa;
