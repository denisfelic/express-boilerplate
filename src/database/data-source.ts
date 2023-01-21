import "reflect-metadata";
import path from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.join(__dirname, "database.sqlite"),
  synchronize: true,
  logging: false,
  entities: [
    process.env.NODE_ENV == "production"
      ? "dist/models/*.js"
      : "src/models/*.ts",
  ],
  migrations: [],
  subscribers: [],
});
