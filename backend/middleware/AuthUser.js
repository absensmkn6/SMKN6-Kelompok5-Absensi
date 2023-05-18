import User from "../models/UserModels.js";

export const verifyUser = async (req,res, next) => {
    if(!req.session.userId){
        return res.status(201).json({msg: "Mohon login ke akun Anda!"});
    }
    const user = await User.findOne({
        where: {
            id: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    req.userId = user.id;
    req.role = user.role;
    next();
}

export const adminOnly = async (req, res, next) => {
    const user = await User.findOne({
        where: {
            id: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    if(user.role !== "admin") return res.status(200).json({msg: "Anda tidak memiliki hak Akses"});
    next();
}