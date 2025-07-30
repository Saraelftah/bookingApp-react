import axios from "axios";

export const axiosInstance = axios
.create({
    baseURL: "https://booking-app-db.vercel.app/"
});