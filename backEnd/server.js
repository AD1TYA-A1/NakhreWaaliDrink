import express from "express"
import dotenv from "dotenv"
import { connDB } from "./config/db.js"
import uRoute from "./routes/uCheckOut.route.js"
import cors from "cors";
const app = express()
const port = 3000

dotenv.config();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());


app.use("/api/users", uRoute );
app.use("/api/bottles", uRoute );


app.get('/', (req, res) => {
  res.send('This is your server');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connDB();
})

