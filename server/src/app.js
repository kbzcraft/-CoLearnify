import express from "express";
import "dotenv/config";
import { notesRoute, userRoute } from "./routes/index.js";
import { connection } from "./db/connection.js";
// import { userRoute } from "./../routes/users.js";

const app = express();
const { PORT, HOST } = process.env;
connection();
app.use(express.json());
app.use(notesRoute, userRoute);

app.listen(PORT, HOST, () => {
  console.log(`listening to ${HOST}:${PORT}`);
});
