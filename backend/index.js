import express from "express";
import cors from "cors";
import session from "express-session";
import SiswaRoute from "./routes/SiswaRoute.js";
import UserRoute from "./routes/UserRoute.js";
import KelasRoute from "./routes/KelasRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize";
import db from "./config/Database.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
})

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false, 
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

// (async()=>{
//     await db.sync();
// })();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(SiswaRoute);
app.use(KelasRoute);
app.use(UserRoute);
app.use(AuthRoute);

// store.sync();

app.listen(process.env.APP_PORT, ()=> console.log('Listening'));