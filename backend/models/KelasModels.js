import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Kelas = db.define('kelas', {  
    kelas: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    jumlah: DataTypes.INTEGER,
}, {
    freezeTableName:true
});

export default Kelas;

(async()=>{
    await db.sync();
})();