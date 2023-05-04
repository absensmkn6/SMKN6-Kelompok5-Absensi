import Siswa from "../models/SiswaModels.js";

export const getSiswa = async(req, res) =>{
    try{
        const response = await Siswa.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getSiswaByNis= async(req, res) =>{
    try{
        const response = await Siswa.findOne({
            where:{
                nis: req.params.nis
            }
        });
        res.status(200).json(response);
    } catch (error){ 
        console.log(error.message);
    }
}

export const createSiswa= async(req, res) =>{
    try{
        await Siswa.create(req.body);
        res.status(201).json({msg: "Siswa telah ditambah"});
    } catch (error){
        console.log(error.message);
    }
}

export const UpdateSiswa= async(req, res) =>{
    try{
        await Siswa.update(req.body,{
            where:{
                nis:req.params.nis
            }
    });
        res.status(201).json({msg: "Berhasil Update Siswa"});
    } catch (error){
        console.log(error.message);
    }
}

export const DeleteSiswa= async(req, res) =>{
    try{
        await Siswa.destroy({
            where:{
                nis:req.params.nis
            }
    });
        res.status(201).json({msg: "Berhasil hapus Siswa"});
    } catch (error){
        console.log(error.message);
    }
}
