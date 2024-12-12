import express from "express";

const app = express();
const PORT = express.env.PORT || 3000;

app.use(express.json());
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
  console.log("http://localhost:3000/");
})