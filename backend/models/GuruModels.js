import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Guru = db.define('guru', {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey:true
    // },   
    // userId:{
    //     type: DataTypes.INTEGER,
    //     defaultValue: DataTypes.UUIDV4,
    //     allowNull: false, 
    //     validate:{
    //         notEmpty: true,
    //     }
    // },
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    alamat: DataTypes.STRING,
    gender: DataTypes.STRING,
    nohp: DataTypes.STRING,
}, {
    freezeTableName:true
});


// RELASI
// User.hasMany(Siswa);
// Siswa.belongsTo(User, {foreignKey: 'userId'});

export default Guru;

(async()=>{
    await db.sync();
})();