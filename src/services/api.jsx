import Axios from "axios"

    const connection = Axios.create({
        baseURL: "http://localhost:8000/",
        headers: {"Authorization": "Token cbbd44d4512a83192c5ca9a0cd4b88a40fd8027d"}
    });

    export default connection;
