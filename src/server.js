import "dotenv/config.js";
import express, { json } from "express";
import conn from "./config/conn.js";
import "./models/motoristaModel.js";
import "./models/onibusModel.js";
import "./models/linhasModel.js"


// import livrosRoutes from "./routes/livrosRoutes.js";
import onibusRoutes from "./routes/onibusRoutes.js"
import motoristaRoutes from "./routes/motoristaRoutes.js"
import linhasRoutes from "./routes/linhasRoutes.js"

const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(json());


app.use("/motorista", motoristaRoutes)
app.use("/onibus", onibusRoutes)
app.use("/linhas", linhasRoutes)


app.get("/", (req, res) => {
  res.send("Olá");
});

app.listen(PORT, () => {
  console.log("Server on PORT" + PORT);
});
