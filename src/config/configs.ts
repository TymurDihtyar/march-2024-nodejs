import dotenv from "dotenv";

dotenv.config();

export const configs = {
  APP_PORT: process.env.APP_PORT || 3001,
  APP_HOST: process.env.APP_HOST,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
};
