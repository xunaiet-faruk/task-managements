import axios from "axios";

const axiosHooks =axios.create({
    baseURL: "https://task-managment-server-alpha.vercel.app"
})

const Useaxios = () => {
    return axiosHooks
};

export default Useaxios;