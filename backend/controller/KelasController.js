import Kelas from "../models/KelasModels.js";

export const getKelas = async(req, res) =>{
    try{
        const response = await Kelas.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getKelasById = async(req, res) =>{
    try{
        const response = await Kelas.findOne({
            attributes:['id','kelas','jurusan','jumlah'],
            where:{
                id: req.params.id
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
                id:req.params.id
            }
    });
        res.status(201).json({msg: "Berhasil Update Kelas"});
    } catch (error){
        console.log(error.message);
    }
}

export const DeleteKelas= async(req, res) =>{
    const kelas = await Kelas.findOne({
        where:{
            id: req.params.id
        }
    });
    if(!kelas) return res.status(200).json({msg: "Kelas tidak ditemukan"});
    try{
        await Kelas.destroy({
            where:{
                id: kelas.id
            }
    });
        res.status(201).json({msg: "Berhasil hapus Kelas"});
    } catch (error){
        console.log(error.message);
    }
}
