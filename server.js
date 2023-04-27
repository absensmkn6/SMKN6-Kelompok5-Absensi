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

// COUNT DATA FOR DASHBOARD
// app.get("/countSiswa",(req, res) =>{
//     const sql = "SELECT COUNT *  FROM siswa"
//     db.query(sql, (err, data)=>{
//         if(err) return res.json("error");
//         return res.json(data);
//     })
// })

// TABLE SISWA
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

// TABLE KELAS

app.get("/kelas", (req, res)=> {
    const sql = "SELECT * FROM kelas";
    db.query(sql, (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})


app.post('/createk', (req, res)=>{
    const sql = "INSERT INTO kelas (`nama_kelas`,`jurusan`,`jumlah`) VALUES (?)";
    const values = [
        req.body.nama_kelas,
        req.body.jurusan,
        req.body.jumlah,
    ] 
    const id_kelas = req.params.id_kelas;
    db.query(sql, [values], (err, data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })                        
})
app.put('/updatek/:id_kelas', (req, res)=>{
    const sql = "update kelas set `nama_kelas` = ?, `jurusan` = ?, `jumlah` = ?,  where id_kelas = ? ";
    const id_kelas = req.params.id_kelas

    db.query(sql, [ req.body.nama_kelas,  req.body.jurusan, req.body.jumlah, id_kelas], (err, result)=>{
        if(err) return res.json("error");
        return res.json({updated: true});
    })                        
})

app.get("/updatek/:id_kelas", (req, res)=> {
    const sql = "SELECT * FROM kelas where id_kelas = ?";
    const id_kelas = req.params.id_kelas
    db.query(sql, [id_kelas], (err, result) => {
        if(err) return res.json("error");
        return res.json(result);
    })
})

app.delete('/kelas/:id_kelas', (req,res)=>{
    const sql = "DELETE FROM kelas where id_kelas = ? ";
    const id_kelas = req.params.id_kelas;

    db.query(sql, [id_kelas], (err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })
})

// TABLE GURU

app.get("/guru", (req, res)=> {
    const sql = "SELECT * FROM guru";
    db.query(sql, (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})


app.post('/createg', (req, res)=>{
    const sql = "INSERT INTO guru (`nuptk`,`nama`, `alamat`,`nohp`) VALUES (?)";
    const values = [
        req.body.nuptk,
        req.body.nama,
        req.body.alamat,
        req.body.nohp
        // req.body.jurusan,
        // req.body.ttl,
        // req.body.gender,
    ] 
    const id_guru = req.params.id_guru;
    db.query(sql, [values], (err, data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })                        
})
app.put('/updateg/:id_guru', (req, res)=>{
    const sql = "update guru set `nama` = ?, `alamat` = ?, `nohp` = ? where id_guru = ? ";
    const id_guru = req.params.id_guru
        
        // req.body.jurusan,
        // req.body.ttl,
        // req.body.gender,
    db.query(sql, [ req.body.nama, req.body.alamat, req.body.nohp, id_guru], (err, result)=>{
        if(err) return res.json("error");
        return res.json({updated: true});
    })                        
})

app.get("/updateg/:id_guru", (req, res)=> {
    const sql = "SELECT * FROM guru where id_guru = ?";
    const id_guru = req.params.id_guru
    db.query(sql, [id_guru], (err, result) => {
        if(err) return res.json("error");
        return res.json(result);
    })
})

app.delete('/guru/:id_guru', (req,res)=>{
    const sql = "DELETE FROM guru where id_guru = ? ";
    const id_guru = req.params.id_guru;

    db.query(sql, [id_guru], (err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listening");
})


