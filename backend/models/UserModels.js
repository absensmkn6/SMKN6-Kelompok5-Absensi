import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    nama:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    nohp:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    alamat:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    gender:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    tanggal_lahir:{
        type: DataTypes.DATE,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    user_kode:{
        type: DataTypes.INTEGER,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
},{
    freezeTableName: true
});

export default User