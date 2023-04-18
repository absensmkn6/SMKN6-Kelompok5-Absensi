const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbabsensi"

})

app.get("/", (req, res)=> {
    const sql = "SELECT * FROM siswa";
    db.query(sql, (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

app.post('/create', (req, res)=>{
    const sql = "INSERT INTO siswa ('nis','nama','ttl','kelas','alamat','gender','nohp',) VALUES (?)";
    const values = [
        req.body.nis,
        req.body.nama,
        req.body.ttl,
        req.body.kelas,
        req.body.alamat,
        req.body.gender,
        req.body.nohp
    ] 
    db.query(sql, [values], (err, data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })                        
})

app.listen(8081, () => {
    console.log("listening");
})