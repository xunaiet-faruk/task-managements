import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";

import { FcGoogle } from "react-icons/fc";
import Fotter from "../../Component/Fotter/Fotter";
import { useContext, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
import Swal from "sweetalert2";

const Login = () => {
    const [passwrong, setpasswrong] = useState('');
    const { signin, Googlesign } = useContext(Authcontext);

    const location = useLocation();
    const navigate = useNavigate()

    const handlesubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signin(email, password)
            .then(res => {

                Swal.fire({
                    icon: 'success',
                    text: 'Successfully login!',

                })

                console.log(res.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                setpasswrong(error.message)
            })
    }

    const handlegoogle = () => {
        Googlesign()
            .then(() => {
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <Navbar/>
            <div>
                <div>
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col">
                            <div className="text-center">


                            </div>
                            <div className="card shrink-0 lg:w-[440px] w-[370px] md:w-[400px] shadow-2xl bg-gray-100">
                                <h1 className="text-3xl text-center mt-5 font-semibold">Login <span className="text-blue-400">Here</span></h1>

                                <form onSubmit={handlesubmit} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                       
                                    </div>
                                    <div className="form-control mt-6">

                                      
                                            <input type="submit" value="submit" className="btn bg-black text-white text-bold"/>

                                       
                                    </div>
                                    <p className='p-4 text-center'>Or</p>
                                    <div>
                                        <button onClick={handlegoogle} className='btn btn-outline hover:btn-ghost w-full '>
                                            <FcGoogle className='text-xl' /> Google
                                        </button>
                                    </div>
                                </form>
                                <p className='font-bold text-center mb-5'>Your new please <Link to={'/register'} className='text-red-500'>Register</Link></p>
                                <p className="text-center">
                                    {/* {
                                        passwrong && <span className=" text-red-400">{passwrong}</span>
                                    } */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Fotter/>
        </div>
    );
};

export default Login;