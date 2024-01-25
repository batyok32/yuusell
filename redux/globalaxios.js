import axios from "axios";

const ApiManager = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
});

export default ApiManager;
