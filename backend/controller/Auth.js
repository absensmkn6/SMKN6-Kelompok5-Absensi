import User from "../models/UserModels.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email,
            // role: req.body.role
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(402).json({msg: "Password Salah"});
    req.session.userId = user.id;
    req.session.role = user.role;
    const id = user.id;
    const nama = user.nama;
    const email = user.email;
    const nohp = user.nohp;
    const alamat = user.alamat;
    const gender = user.gender;
    const role = user.role;
    const user_kode = user.user_kode;
    res.status(200).json({id, nama, email, nohp, alamat, gender, role, user_kode});
}

export const Me = async (req, res) =>{
    if(!req.session.userId){
        return res.status(200).json({msg: "Mohon login ke akun Anda!"});
    }
    const user = await User.findOne({
        attributes:['id','nama','email','nohp','alamat','gender','role','user_kode'],
        where: {
            id: req.session.userId
        }
    });
    if(!user) return res.status(201).json({msg: "User tidak ditemukan"});
    res.status(200).json(user);
}

export const logOut = (req, res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(200).json({msg: "Tidak dapat logout"});
        res.status(201).json({msg: "Anda telah logout"});
    });
}