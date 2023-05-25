import controllerOS from './src/controller/controller.os.js';
import { createServer } from 'http'; 
import express from 'express';
import cors from "cors";

const app = express();

app.use(cors());

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})

app.use(controllerOS);

var server = createServer(app); 
server.listen(3030);
console.log("Servidor escutando na porta 3030...")