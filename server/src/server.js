import express from "express";
import cors from "cors";
import { mongoose } from "./config/userDB.js";
import { userRoutes } from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 10000;
mongoose;

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
  console.log(`http://localhost:${PORT}/`);
});