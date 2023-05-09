import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCalendarCheck,  faSignOutAlt, faGraduationCap, faSchool, faUsers } from '@fortawesome/free-solid-svg-icons'
import SidebarAdmin from "../../../sidebar/sidebaradmin";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom";



const DataGuru = () => {

  const[DataGuru, setDataGuru] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8081/guru/')
    .then(res => setDataGuru(res.data))
    .catch(err => console.log(err));
}, [])

const handleDelete = async (id_guru) => {
  try {
      await axios.delete('http://localhost:8081/guru/'+id_guru)
      window.location.reload()
  }catch(err){
      console.log(err);
  }
}

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
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50 col-start-1 col-end-3">Data Guru</h3>
                  <Link to="/createg" className="btn btn-primary btn-sm mr-2 col-end-7 " >+ Tambah Guru</Link>
                </div>
                
              </div>
              <div class="block w-full overflow-x-auto">
                <table class="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">NUPTK</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Nama</th>
                      {/* <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Mapel</th> */}
                      {/* <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Jenis Kelamin</th> */}
                      {/* <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">TTL</th> */}
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Alamat</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">No.Telp</th>
                      {/* <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Username</th> */}
                      {/* <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Password</th> */}
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    DataGuru.map((data, i)=>
                      <tr key={i} class="text-gray-700 dark:text-gray-100">
                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{data.id_guru}</td>
                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.nama}</td>
                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.alamat}</td>
                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.nohp}</td>
                        

                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div class="flex items-center">
                            <div class="relative w-full">
                              {/* <Link to="/show" className="btn btn-outline btn-info btn-sm mr-2" htmlFor="modalDetail">Detail</Link> */}
                              <a href={`/updateg/${data.id_guru}`} className="btn btn-outline btn-warning btn-sm mr-2" htmlFor="modalEdit">Edit</a>
                              <button className="btn btn-outline btn-error btn-sm mr-2" onClick={ e => handleDelete(data.id_guru)}>Hapus</button>
                            </div>
                          </div>
                        </td>
                    </tr>)
                    }
                    
                    {/* <div>
                        <input type="checkbox" id="modalTambah" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="modalTambah" className="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Tambah Data Guru</h3>
                                        <form>
                                            <div class="card-body">
                                            <div class="form-group">
                                                <label>NUPTK</label><br></br>
                                                <input type="number" className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan NUPTK" />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama</label><br></br>
                                                <input type="text" placeholder="Masukkan Nama Lengkap" className="input input-bordered mt-2 input-primary w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Jenis Kelamin</label><br></br>
                                                <select className="select select-primary w-full max-w mt-2">
                                                <option disabled selected>Pilih Jenis Kelamin</option>
                                                    <option>Laki-Laki</option>
                                                    <option>Perempuan</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>TTl</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Tempat Tanggal Lahir"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Alamat"/>
                                            </div>
                                            <div class="form-group">
                                                <label>No.Telp</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan No.Telp"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Username</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Username"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Password"/>
                                            </div>
                                    </div>
        
                                <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Simpan</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id="modalDetail" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="modalDetail" className="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Detail Guru</h3>
                                        <form>
                                            <div class="card-body">
                                            <div class="form-group">
                                                <label>NUPTK</label><br></br>
                                                <input type="number" className="input input-bordered mt-2 input-info w-full max-w" value={''} />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama</label><br></br>
                                                <input type="text" className="input input-bordered mt-2 input-info w-full max-w" value={''} />
                                            </div>
                                            <div class="form-group">
                                                <label>Jenis Kelamin</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-info w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>TTL</label><br></br>
                                                <input type="twxt" value={''} className="input input-bordered mt-2 input-info w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-info w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>No.Telp</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-info w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Username</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-info w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label><br></br>
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
                    <div>
                        <input type="checkbox" id="modalEdit" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="modalEdit" className="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Edit Guru</h3>
                                        <form>
                                            <div class="card-body">
                                            <div class="form-group">
                                                <label>NUPTK</label><br></br>
                                                <input type="text" className="input input-bordered mt-2 input-warning w-full max-w" value={''} />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Jenis Kelamin</label><br></br>
                                                <select className="select select-warning w-full max-w mt-2">
                                                <option disabled selected>Pilih Jenis Kelamin</option>
                                                    <option>Laki-Laki</option>
                                                    <option>Perempuan</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>TTL</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>No.Telp</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Username</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-warning w-full max-w" />
                                            </div>
                                            
                                    </div>
        
                                <div class="card-footer">
                                <button type="submit" class="btn btn-warning">Update</button>
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
                                                <label>NUPTK</label><br></br>
                                                <input type="text" className="input input-bordered mt-2 input-error w-full max-w" value={''} />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Jenis Kelamin</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>TTL</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>No.Telp</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Username</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label><br></br>
                                                <input type="text" value={''} className="input input-bordered mt-2 input-error w-full max-w" />
                                            </div>
                                    </div>
        
                                <div class="card-footer">
                                <button type="submit" class="btn bg-red-600 text-white">Delete</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div> */}
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

export default DataGuru;