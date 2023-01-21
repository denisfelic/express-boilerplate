import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import Routes from "./routes";
import { AppDataSource } from "./database/data-source";

const app = express();

app.use(helmet());
app.use(morgan("tiny"));

app.use(Routes);
(async () => {
  try {
    await AppDataSource.initialize();
    console.log("database connected");

    const PORT = parseInt(`${process.env.PORT}`);
    await app.listen(PORT);
    console.log(`app running at ${PORT}`);
  } catch (error) {
    console.error(error);
  }
})();
