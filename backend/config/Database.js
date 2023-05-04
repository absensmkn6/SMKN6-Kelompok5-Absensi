import { Sequelize } from "sequelize";

const db = new Sequelize('dbabsentra','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;