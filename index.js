import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/",(req, res) => {
    res.send("hola mundo");
});

app.get("/productos", (req, res) => {
    res.send("lista de productos")
});

app.listen( PORT,() => {
    console.log(`server running on port ${PORT}`);
});