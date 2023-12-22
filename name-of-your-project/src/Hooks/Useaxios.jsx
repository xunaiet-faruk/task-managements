import axios from "axios";

const axiosHooks =axios.create({
    baseURL : "http://localhost:5000"
})

const Useaxios = () => {
    return axiosHooks
};

export default Useaxios;