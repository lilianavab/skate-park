import express from "express";
import exphbs, { create } from 'express-handlebars';
import fileUpload from 'express-fileupload';

import jwt from "jsonwebtoken";
import router from "./routes/routes.js";

import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, '/../public/css'))); 
app.use('/img', express.static(path.join(__dirname, '/../public/img')));
app.use('/js', express.static(path.join(__dirname, '/../public/js')));
app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/css'));
app.use(
    fileUpload({
        limits: {fileSize: 5000000}, 
        abortOnLimit: true,
        responseOnLimit: 'El peso del archivo supera el límite permitido',
    })
);

app.use(express.urlencoded({ extended: false }));

app.use('/bootstrap', express.static(path.join(__dirname, '/../node_modules/bootstrap/dist/css')));
app.use('/bootstrapjs', express.static(path.join(__dirname, '/../node_modules/bootstrap/dist/js')));
app.use('/jquery', express.static(path.join(__dirname, '/../node_modules/jquery/dist')));
app.use('/axios', express.static(path.join(__dirname, '/../node_modules/axios/dist')));

app.use("/", router);

const hbs = exphbs.create({
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views', 'layout') 
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, 'views')); 

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
