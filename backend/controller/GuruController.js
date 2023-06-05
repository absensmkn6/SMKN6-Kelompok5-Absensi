import Guru from "../models/GuruModels.js";
import User from "../models/UserModels.js";
import {Op} from "sequelize";

export const getGuru = async(req, res) =>{
    try{
        const response = await Guru.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getGuruById= async(req, res) =>{
    try{
        const response = await Guru.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){ 
        console.log(error.message);
    }
}

export const createGuru= async(req, res) =>{
    try{
        await Guru.create(req.body);
        res.status(201).json({msg: "Guru telah ditambah"});
    } catch (error){
        console.log(error.message);
    }
}

export const UpdateGuru= async(req, res) =>{
    try{
        await Guru.update(req.body,{
            where:{
                id:req.params.id
            }
    });
        res.status(201).json({msg: "Berhasil Update Guru"});
    } catch (error){
        console.log(error.message);
    }
}

export const DeleteGuru = async(req, res) =>{
    try{
        await Guru.destroy({
            where:{
                id:req.params.id
            }
    });
        res.status(201).json({msg: "Berhasil hapus Guru"});
    } catch (error){
        console.log(error.message);
    }
}
