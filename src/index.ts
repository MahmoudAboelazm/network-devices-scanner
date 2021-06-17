import express from "express";
import cors from "cors";
import devicesRouter from "./routers/devicesRouter";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const app = express();
  app.use(express.static("public"));
  console.log(process.env.TEST);
  app.set("views", "./src/views");
  app.set("view engine", "ejs");
  app.use(express.static("./src/public"));

  app.use("/", cors(), devicesRouter);

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}: http://localhost:${port}`);
  });
};
main().catch((err) => console.log(err));
