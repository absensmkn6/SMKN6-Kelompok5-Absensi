import axios from "axios"
import React, { useState } from "react"
// import { BrowserRouter as UseNavigate } from "react-router-dom"
import useNavigate from "react-dom"

const CreateSiswa = () => {

const [nis, setnis] = useState('')
const [nama, setnama] = useState('')
const [ttl, setttl] = useState('')
const [kelas, setkelas] = useState('')
const [alamat, setalamat] = useState('')
const [gender, setgender] = useState('')
const [nohp, setnohp] = useState('')
const navigate = useNavigate();

function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/create', {nis, nama, ttl, kelas, alamat, gender, nohp}).then(res => {
        console.log(res);
        navigate('/');
    }).catch(err => console.log(err));
}

    return(
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
                                <input type="number" className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan NIS Siswa" onChange={e => setnis(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label>Nama</label><br></br>
                                <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Nama Lengkap" onChange={e => setnama(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label>TTL</label><br></br>
                                <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Tempat Tanggal Lahir" onChange={e => setttl(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label>Kelas</label><br></br>
                                <select className="select select-primary w-full max-w mt-2" onChange={e => setkelas(e.target.value)}>
                                <option disabled selected>Pilih Kelas</option>
                                    <option>X</option>
                                    <option>XI</option>
                                    <option>XII</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Alamat</label><br></br>
                                <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Alamat" onChange={e => setalamat(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label>Jenis Kelamin</label><br></br>
                                    <select className="select select-primary w-full max-w mt-2" onChange={e => setgender(e.target.value)}>
                                    <option disabled selected>Pilih Jenis Kelamin</option>
                                        <option>Laki-Laki</option>
                                        <option>Perempuan</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>No.Telp</label><br></br>
                                    <input type="number" className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan No.Telp"  onChange={e => setnohp(e.target.value)} />
                                </div>
                                {/* <div class="form-group">
                                    <label>Username</label><br></br>
                                    <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Username" />
                                </div>
                                <div class="form-group">
                                    <label>Password</label><br></br>
                                    <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Password"/>
                                </div> */}
                        </div>

                    <div class="card-footer">
                    <button type="submit" class="btn btn-primary">ADD</button>
                    </div>
                </form>
                </div>
            </div>
</div>
    )
}
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
                                <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" value={''} placeholder="Masukkan NIS Siswa" />
                            </div>
                            <div class="form-group">
                                <label>Nama</label><br></br>
                                <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Nama Lengkap"/>
                            </div>
                            <div class="form-group">
                                <label>TTL</label><br></br>
                                <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Tempat Tanggal Lahir" />
                            </div>
                            <div class="form-group">
                                <label>Kelas</label><br></br>
                                <select className="select select-primary w-full max-w mt-2">
                                <option disabled selected>Pilih Kelas</option>
                                    <option>X</option>
                                    <option>XI</option>
                                    <option>XII</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Alamat</label><br></br>
                                <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Alamat"/>
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
                                    <label>No.Telp</label><br></br>
                                    <input type="number" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan No.Telp" />
                                </div>
                                <div class="form-group">
                                    <label>Username</label><br></br>
                                    <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Username" />
                                </div>
                                <div class="form-group">
                                    <label>Password</label><br></br>
                                    <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Password"/>
                                </div>
                        </div>

                    <div class="card-footer">
                    <button type="submit" class="btn btn-primary">ADD</button>
                    </div>
                </form>
                </div>
            </div>
</div>

export default CreateSiswa