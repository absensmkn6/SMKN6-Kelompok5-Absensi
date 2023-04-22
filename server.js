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
    const sql = "INSERT INTO siswa (`nis`,`nama`, `kelas`,`alamat`,`nohp`) VALUES (?)";
    const values = [
        req.body.nis,
        req.body.nama,
        req.body.kelas,
        req.body.alamat,
        req.body.nohp
        // req.body.jurusan,
        // req.body.ttl,
        // req.body.gender,
    ] 
    const id = req.params.id;
    db.query(sql, [values], (err, data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })                        
})
app.put('/update/:id', (req, res)=>{
    const sql = "update siswa set `nama` = ?, `kelas` = ?, `alamat` = ?, `nohp` = ? where id = ? ";
    const id = req.params.id
        
        // req.body.jurusan,
        // req.body.ttl,
        // req.body.gender,
    db.query(sql, [ req.body.nama, req.body.kelas, req.body.alamat, req.body.nohp, id], (err, result)=>{
        if(err) return res.json("error");
        return res.json({updated: true});
    })                        
})

app.get("/update/:id", (req, res)=> {
    const sql = "SELECT * FROM siswa where id = ?";
    const id = req.params.id
    db.query(sql, [id], (err, result) => {
        if(err) return res.json("error");
        return res.json(result);
    })
})

app.delete('/index/:id', (req,res)=>{
    const sql = "DELETE FROM siswa where id = ? ";
    const id = req.params.id;

    db.query(sql, [id], (err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })
})


// app.get("/", (req, res)=> {
//     const sql = "SELECT * FROM coba";
//     db.query(sql, (err, data) => {
//         if(err) return res.json("error");
//         return res.json(data);
//     })
// })

// app.post('/create', (req, res)=>{
//     const sql = "INSERT INTO coba (`nis`,`nama`) VALUES (?)";
//     const values = [
//         req.body.nis,
//         req.body.nama,
//     ] 
//     db.query(sql, [values], (err, data)=>{
//         if(err) return res.json("error");
//         return res.json(data);
//     })                        
// })

app.listen(8081, () => {
    console.log("listening");
})


