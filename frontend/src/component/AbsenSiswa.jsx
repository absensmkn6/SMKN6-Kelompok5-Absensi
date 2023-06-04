import React from "react";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlices";


const AbsenSiswa = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((state) => state.auth);

    var showdate=new Date();
    var displaytodaysdate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    var dt=showdate.toDateString();
    var displaytime=showdate.getHours()+':'+showdate.getMinutes()+":"+showdate.getSeconds();
    var waktu=showdate.getHours()+':'+showdate.getMinutes()+":"+showdate.getSeconds()+" "+dt;

    return(
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white table-zebra w-full">
        <Sidebar/>
            <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                <div class="p-2 gap-4">
                    <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                        <div class="rounded-t mb-0 px-0 border-0">

                        <div class="py-2 pb-8">
                            <div class="relative w-full max-w-full flex items-center grid grid-cols-6 gap-4 py-2 rounded-lg" dir="ltr">
                                <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50 col-start-1 pl-2 col-end-3">Your history</h3> 
                                <label htmlFor="my-modal" className="btn btn-primary  btn-sm mr-2 col-end-7 ps-8 ">Absen Now</label> 
                            </div>
                            
                            <input type="checkbox" id="my-modal" className="modal-toggle" />
                                <div className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Ayo absen sekarang!</h3><br/>
                                    <table>
                                    <tr> 
                                        <th> waktu </th>&nbsp;
                                        <th> : </th>&nbsp;
                                        <th> <center> <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={waktu} readonly="true" /> </center>  </th><br/>
                                    </tr>
                                    <tr>
                                        <th> </th>
                                        <th> </th>
                                        <th> </th>
                                    </tr>
                                    <tr  class="pb-8">
                                        <th> ket </th>&nbsp;
                                        <th> : </th>&nbsp;
                                        <th> 
                                        <select id='level' className="input input-bordered input-info w-full max-w-xs">
                                                <option value="" selected disabled>Keterangan</option>
                                                <option value="Guru">Hadir</option>
                                                <option value="Siswa">Sakit </option>
                                                <option value="Admin">Ijin</option>
                                            </select>
                                        </th>
                                    </tr>
                                    </table>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal" className="btn btn-outline btn-warning ps-8">Cancel</label>
                                        <label htmlFor="my-modal"  className="btn btn-outline btn-accent" onClick={() => alert("Data belum bisa terkirim")} >Send</label>
                                    </div>
                                </div>
                                </div>
                                <table class="items-center w-full bg-transparent border-collapse pr-2 ">
                                    <thead>
                                        <tr>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">NISN</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">&nbsp; &nbsp; Nama</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Waktu</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Keterangan</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">1</th>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.user_kode}</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div class="flex items-center">
                                                <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.nama}</td>
                                                </div>
                                            </td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">06.38.57:10/04/2023</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Sakit</td>
                                        </tr>

                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">2</th>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.user_kode}</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div class="flex items-center">
                                                <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.nama}</td>
                                                </div>
                                            </td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">06.39.37:11/04/2023</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Hadir</td>
                                        </tr>

                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">3</th>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.user_kode}</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div class="flex items-center">
                                                <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.nama}</td>
                                                    </div>
                                            </td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">06.41.23:12/04/2023</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Izin</td>
                                        </tr>

                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">4</th>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.user_kode}</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div class="flex items-center">
                                                <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.nama}</td>
                                                </div>
                                            </td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">06.42.07:13/04/2023</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.user_kode}</td>
                                        </tr>

                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">5</th>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.user_kode}</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div class="flex items-center">
                                                <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.nama}</td>
                                                </div>
                                            </td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">06.46.54:14/04/2023</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.user_kode}</td>
                                        </tr>

                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">6</th>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.user_kode}</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div class="flex items-center">
                                                <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.nama}</td>
                                                </div>
                                            </td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">06.58.47:17/04/2023</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Hadir</td>
                                        </tr>

                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">7</th>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.user_kode}</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div class="flex items-center">
                                                <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user && user.nama}</td>
                                                </div>
                                            </td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">06.58.47:18/04/2023</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Sakit</td>
                                        </tr>
                                    </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
};

export default AbsenSiswa;
