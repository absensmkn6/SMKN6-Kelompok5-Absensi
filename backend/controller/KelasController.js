import Kelas from "../models/KelasModels.js";

export const getKelas = async(req, res) =>{
    try{
        const response = await Kelas.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getKelasByKodeKelas= async(req, res) =>{
    try{
        const response = await Kelas.findOne({
            where:{
                kode_kelas: req.params.kode_kelas
            }
        });
        res.status(200).json(response);
    } catch (error){ 
        console.log(error.message);
    }
}

export const createKelas= async(req, res) =>{
    try{
        await Kelas.create(req.body);
        res.status(201).json({msg: "Kelas telah ditambah"});
    } catch (error){
        console.log(error.message);
    }
}

export const UpdateKelas= async(req, res) =>{
    try{
        await Kelas.update(req.body,{
            where:{
                kode_kelas:req.params.kode_kelas
            }
    });
        res.status(201).json({msg: "Berhasil Update Kelas"});
    } catch (error){
        console.log(error.message);
    }
}

export const DeleteKelas= async(req, res) =>{
    try{
        await Kelas.destroy({
            where:{
                kode_kelas:req.params.kode_kelas
            }
    });
        res.status(201).json({msg: "Berhasil hapus Kelas"});
    } catch (error){
        console.log(error.message);
    }
}
