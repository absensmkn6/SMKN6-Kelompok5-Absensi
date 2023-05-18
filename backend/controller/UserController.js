import User from "../models/UserModels.js";
import argon2 from "argon2";

export const getUser = async(req, res) =>{
    try{
        const response = await User.findAll({
            attributes:['id','nama','email','nohp','alamat','gender','role','user_kode']
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getUserById= async(req, res) =>{
    try{
        const response = await User.findOne({
            attributes:['id','nama','email','nohp','alamat','gender','role','user_kode'],
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){ 
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    const {nama, email, nohp, alamat, gender, password, confPassword, role, user_kode} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            nama: nama,
            email: email,
            nohp: nohp,
            alamat: alamat,
            gender: gender,
            password: hashPassword,
            role: role,
            user_kode: user_kode,
        });
        res.status(201).json({msg: "Register Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    const {name, email,nohp, alamat, gender, password, confPassword, role, user_kode} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    try {
        await User.update({
            name: name,
            email: email,
            nohp: nohp,
            alamat: alamat,
            gender: gender,
            password: hashPassword,
            role: role,
            user_kode: user_kode
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const DeleteUser= async(req, res) =>{
    const user = await User.findOne({
        where:{
            id: req.params.id
        }
    });
    if(!user) return res.status(200).json({msg: "User tidak ditemukan"});
    try{
        await User.destroy({
        where:{
            id: user.id
        }
    });
        res.status(201).json({msg: "Berhasil Delete User"});
    } catch (error){
        console.log(error.message);
    }
}
