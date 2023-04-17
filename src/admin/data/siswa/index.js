import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCalendarCheck,  faSignOutAlt, faGraduationCap, faSchool, faUsers } from '@fortawesome/free-solid-svg-icons'
import SidebarAdmin from "../../../sidebar/sidebaradmin";



const DataSiswa = () => {
  return (

    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <SidebarAdmin/>
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div class="bg-purple-700 dark:bg-gray-800 rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-tl from-red-600 to-orange-600 transition-all duration-300 transform group-hover:rotate-12">
            <FontAwesomeIcon icon={faUsers} className="w-7 h-7" />
            </div>
            <div class="text-right">
              <p class="text-2xl">Total Siswa</p>
              <span class="text-sm font-bold leading-normal text-emerald-500">150</span>
            </div>
          </div>
          <div class="bg-purple-700 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-gradient-to-tl from-emerald-500 to-teal-400 rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <FontAwesomeIcon icon={faSchool} className="w-7 h-7" />
              
            </div>
            <div class="text-right">
              <p class="text-2xl">Total Kelas</p>
              <span class="text-sm font-bold leading-normal text-emerald-500">8</span>

            </div>
          </div>
          <div class="bg-purple-700 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-gradient-to-tl from-orange-500 to-yellow-500 rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <FontAwesomeIcon icon={faUser} className="w-7 h-7" />

            </div>
            <div class="text-right">
              <p class="text-2xl">Total Guru</p>
              <span class="text-sm font-bold leading-normal text-emerald-500">40</span>
            </div>
          </div>
          <div class="bg-purple-700 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-gradient-to-tl from-blue-500 to-violet-500 rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <FontAwesomeIcon icon={faCalendarCheck} className="w-7 h-7" />

            </div>
            <div class="text-right">
              <p class="text-2xl">Absen Hari ini</p>
              <span class="text-sm font-bold leading-normal text-emerald-500">95 Murid</span>
            </div>
          </div>
        </div>
        <div>
        
        <div class="p-4 gap-4">
          <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div class="rounded-t mb-0 px-0 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex items-center grid grid-cols-6 gap-4">
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50 col-start-1 col-end-3">Data Siswa</h3>
                  <label htmlFor="modalTambah" className="btn btn-primary btn-sm mr-2 col-end-7 " >+ Tambah Data</label>
                </div>
                
              </div>
              <div class="block w-full overflow-x-auto">
                <table class="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">NIS</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Nama</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">TTL</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Kelas</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Alamat</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Gender</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No.Telp</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {/* ini modal tambah data */}
                    <div>
                        <input type="checkbox" id="modalTambah" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="modalTambah" className="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Tambah Data Siswa</h3>
                                    <form>
                                            <div class="card-body">
                                            <div class="form-group">
                                                <label>NIS</label><br></br>
                                                <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" value={''} />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>TTL</label><br></br>
                                                <input type="date" value={''} className="input input-bordered mt-2 input-primary w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Kelas</label><br></br>
                                                <select className="select select-primary w-full max-w mt-2">
                                                    <option disabled selected>{''}</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Gender</label><br></br>
                                                <select className="select select-primary w-full max-w mt-2">
                                                    <option disabled selected>{''}</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>No.Telp</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" />
                                            </div>
                                    </div>
        
                                <div class="card-footer">
                                <button type="submit" class="btn btn-primary">ADD</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>

                    {/* ini modal detail */}
                    <div>
                        <input type="checkbox" id="modalDetail" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="modalDetail" className="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Detail Siswa</h3>
                                        <form>
                                            <div class="card-body">
                                            <div class="form-group">
                                                <label>NIS</label><br></br>
                                                <input type="text" className="input input-bordered mt-2 input-info w-full max-w" value={''} />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-info w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>TTL</label><br></br>
                                                <input type="date" value={''} className="input input-bordered mt-2 input-info w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Kelas</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-info w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-info w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Gender</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-info w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>No.Telp</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-info w-full max-w" />
                                            </div>
                                    </div>
        
                                <div class="card-footer">
                                <button type="submit" class="btn btn-info">Ok</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>

                    {/* ini modal edit */}
                    <div>
                        <input type="checkbox" id="modalEdit" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="modalEdit" className="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Edit Siswa</h3>
                                    <form>
                                            <div class="card-body">
                                            <div class="form-group">
                                                <label>NIS</label><br></br>
                                                <input type="text" className="input input-bordered mt-2 input-warning w-full max-w" value={''} />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>TTL</label><br></br>
                                                <input type="date" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Kelas</label><br></br>
                                                <select className="select select-warning w-full max-w mt-2">
                                                    <option disabled selected>{''}</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Gender</label><br></br>
                                                <select className="select select-warning w-full max-w mt-2">
                                                    <option disabled selected>{''}</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>No.Telp</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                    </div>
        
                                <div class="card-footer">
                                <button type="submit" class="btn btn-warning"> Edit </button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>

                    {/* ini modal (?) */}
                    <div>
                        <input type="checkbox" id="modalEdit" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="modalEdit" className="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Edit Siswa</h3>
                                    <form>
                                            <div class="card-body">
                                            <div class="form-group">
                                                <label>NIS hps</label><br></br>
                                                <input type="text" className="input input-bordered mt-2 input-warning w-full max-w" value={''} />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>TTL</label><br></br>
                                                <input type="date" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Kelas</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Gender</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>No.Telp</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                    </div>
        
                                <div class="card-footer">
                                <button type="submit" class="btn btn-warning">Edit</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>

{/* ini modal hapus */}
                    <div>
                        <input type="checkbox" id="modalHapus" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="modalHapus" className="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Yakin ingin hapus data ini?</h3>
                                    <form>
                                            <div class="card-body">
                                            <div class="form-group">
                                                <label>NIS</label><br></br>
                                                <input type="text" className="input input-bordered mt-2 input-error w-full max-w" value={''} />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>TTL</label><br></br>
                                                <input type="date" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Kelas</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Gender</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>No.Telp</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                    </div>
        
                                <div class="card-footer">
                                <button type="submit" class="btn btn-error">Hapus</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id="modalHapus" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="modalHapus" className="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Yakin ingin hapus data ini?</h3>
                                        <form>
                                            <div class="card-body">
                                            <div class="form-group">
                                                <label>NIS</label><br></br>
                                                <input type="text" className="input input-bordered mt-2 input-error w-full max-w" value={''} />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Kelas</label><br></br>
                                                <select className="select select-error w-full max-w mt-2">
                                                    <option disabled selected>{''}</option>
                                                </select>
                                            </div>
                                    </div>
        
                                <div class="card-footer">
                                <button type="submit" class="btn bg-red-600 text-white">Delete</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">1001</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Thoriq Muhammad Hanif Raihan</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Surakarta, 06 November 2006</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">XI RPL</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Boyolali</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Laki-Laki</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">085*******</td>

                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <div class="relative w-full">
                            <label className="btn btn-outline btn-info btn-sm mr-2" htmlFor="modalDetail">Detail</label>
                            <label className="btn btn-outline btn-warning btn-sm mr-2" htmlFor="modalEdit">Edit</label>
                            <label className="btn btn-outline btn-error btn-sm mr-2" htmlFor="modalHapus">Hapus</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">1002</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Alya Cheva Azahra</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Boyolali, 03 November 2006</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">XI RPL</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Boyolali</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Perempuan</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">085*******</td>

                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <div class="relative w-full">
                                 <label className="btn btn-outline btn-info btn-sm mr-2" htmlFor="modalDetail">Detail</label>
                            <label className="btn btn-outline btn-warning btn-sm mr-2" htmlFor="modalEdit">Edit</label>
                            <label className="btn btn-outline btn-error btn-sm mr-2" htmlFor="modalHapus">Hapus</label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">1003</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Francisco Destaliano Putra Sadewa</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Karanganyar, 30 Desember 2004</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">XI RPL</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Karanganyar</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Laki-Laki</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">085*******</td>

                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <div class="relative w-full">
                                 <label className="btn btn-outline btn-info btn-sm mr-2" htmlFor="modalDetail">Detail</label>
                            <label className="btn btn-outline btn-warning btn-sm mr-2" htmlFor="modalEdit">Edit</label>
                            <label className="btn btn-outline btn-error btn-sm mr-2" htmlFor="modalHapus">Hapus</label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">1004</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Indar Dwi Pramesthi</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Surakarta, 14 Juli 2006</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">XI RPL</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Surakarta</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Perempuan</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">085*******</td>

                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <div class="relative w-full">
                                 <label className="btn btn-outline btn-info btn-sm mr-2" htmlFor="modalDetail">Detail</label>
                            <label className="btn btn-outline btn-warning btn-sm mr-2" htmlFor="modalEdit">Edit</label>
                            <label className="btn btn-outline btn-error btn-sm mr-2" htmlFor="modalHapus">Hapus</label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">1005</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Luthfiya Zuhura Syifa Fuadah</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Yogyakarka, 13 November 2006</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">XI RPL</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Sukoharjo</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Perempuan</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">085*******</td>

                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <div class="relative w-full">
                                 <label className="btn btn-outline btn-info btn-sm mr-2" htmlFor="modalDetail">Detail</label>
                            <label className="btn btn-outline btn-warning btn-sm mr-2" htmlFor="modalEdit">Edit</label>
                            <label className="btn btn-outline btn-error btn-sm mr-2" htmlFor="modalHapus">Hapus</label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">1006</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Mentari Dwi Prastiwi</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Sukoharjo, 19 Maret 2006</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">XI RPL</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Sukoharjo</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Perempuan</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">085*******</td>

                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <div class="relative w-full">
                                 <label className="btn btn-outline btn-info btn-sm mr-2" htmlFor="modalDetail">Detail</label>
                            <label className="btn btn-outline btn-warning btn-sm mr-2" htmlFor="modalEdit">Edit</label>
                            <label className="btn btn-outline btn-error btn-sm mr-2" htmlFor="modalHapus">Hapus</label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">1007</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Riyo Pradana Navigasi Firdaus</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Surakarta, 04 Juni 2006</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">XI RPL</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Surakarta</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Laki-Laki</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">085*******</td>

                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <div class="relative w-full">
                                 <label className="btn btn-outline btn-info btn-sm mr-2" htmlFor="modalDetail">Detail</label>
                            <label className="btn btn-outline btn-warning btn-sm mr-2" htmlFor="modalEdit">Edit</label>
                            <label className="btn btn-outline btn-error btn-sm mr-2" htmlFor="modalHapus">Hapus</label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">1008</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Samuel Yudi Prayitno</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Surakarta, 20 Juni 2006</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">XI RPL</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Surakarta</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Laki-Laki</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">085*******</td>

                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <div class="relative w-full">
                                 <label className="btn btn-outline btn-info btn-sm mr-2" htmlFor="modalDetail">Detail</label>
                            <label className="btn btn-outline btn-warning btn-sm mr-2" htmlFor="modalEdit">Edit</label>
                            <label className="btn btn-outline btn-error btn-sm mr-2" htmlFor="modalHapus">Hapus</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      

      
        </div>
        </div>

        </div>
        
      </div>
    
  );

};

export default DataSiswa;