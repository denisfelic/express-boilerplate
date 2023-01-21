export default {
  driver: process.env.DB_DRIVER || "sqlite",
  database: process.env.DB_DATABASE || "memory",
};
