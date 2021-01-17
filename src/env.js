import dotenv from "dotenv";
dotenv.config();

export const { DB_URL, API_PORT } = process.env;

export let hosts = [];
if (process.env.NODE_ENV === "production") {
  hosts = ["https://fifa.sauravmh.com", "https://sauravmh.vercel.app"];
} else {
  hosts = ["http://localhost:3000"];
}
