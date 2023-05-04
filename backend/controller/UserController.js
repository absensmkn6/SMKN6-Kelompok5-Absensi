import User from "../models/UserModels.js";
import argon2 from "argon2";

export const getUser = async(req, res) =>{
    try{
        const response = await User.findAll({
            attributes:['uuid','nama','email','role']
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getUserById= async(req, res) =>{
    try{
        const response = await User.findOne({
            attributes:['uuid','nama','email','role'],
            where:{
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){ 
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    const {nama, email, password, confPassword, role} = req.body;
    if(password !== confPassword) return res.status(200).json({msg: "Password dan Confirm Password tidak cocok"});
    const hashPassword = await argon2.hash(password);
    try{
        await User.create(req.body,{
            nama: nama,
            email: email,
            password: hashPassword,
            role: role
    });
        res.status(201).json({msg: "Berhasil Tambah User"});
    } catch (error){
        console.log(error.message);
    }

}

export const UpdateUser= async(req, res) =>{
    const user = await User.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!user) return res.status(200).json({msg: "User tidak ditemukan"});
    const {nama, email, password, confPassword, role} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    } 
    if(password !== confPassword) return res.status(200).json({msg: "Password dan Confirm Password tidak cocok"});
    try{
        await User.update(req.body,{
            nama: nama,
            email: email,
            password: hashPassword,
            role: role
    },{
        where:{
            id: user.id
        }
    });
        res.status(201).json({msg: "Berhasil Update User"});
    } catch (error){
        console.log(error.message);
    }
}

export const DeleteUser= async(req, res) =>{
    const user = await User.findOne({
        where:{
            uuid: req.params.id
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
