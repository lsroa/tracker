import express from "express";
import router from "./components/users/network.js";
import cors from "cors";
const app = express();

app.use("/users", router);
app.use(cors());

app.listen(8080, () => {
  console.log("La aplicación está escuchando en 8080");
});
