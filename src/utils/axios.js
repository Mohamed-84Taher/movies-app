import axios from "axios";
import env from "react-dotenv";

export const axiosTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: env.TMDB_API_KEY,
  },
});
