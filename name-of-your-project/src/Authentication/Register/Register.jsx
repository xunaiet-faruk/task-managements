import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";

import { FcGoogle } from "react-icons/fc";
import Fotter from "../../Component/Fotter/Fotter";
import { useContext, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
    const nabigat =useNavigate()
    const [error, seterror] = useState('')
    const [passwrong, setpasswrong] = useState('');

    const { createuser, Googlesign } = useContext(Authcontext)
    const handlesubmit = e => {

        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const image = e.target.image.value;
        const password = e.target.password.value;
        console.log(email, password, image, name)
        seterror('')
        if (password.length < 6) {
            seterror('At least 6 carecter must be added');
            return;

        } else if (!/[A-Z]/.test(password)) {
            seterror('password must be 1 letter uppercase')
            return;

        } else if (!/[!@#$%^&*]/.test(password)) {
            seterror('password must be 1 caracter speacial')
            return;
        }
        createuser(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: image,

                })
                    .then(() => {
                       
                        Swal.fire({
                            icon: 'success',
                            text: 'Successfully login!'
                        })
                        nabigat('/')
                            .catch(error => {
                                console.log(error)
                            })
                    })
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
            })
        }

    const handlegoogle = () => {
        Googlesign()
            .then(() => {
                nabigat(location?.state ? location.state : '/')


            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div>
            <div>
                <Navbar />
                <div>
                    <div>
                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col">
                                <div className="text-center">


                                </div>
                                <div className="card shrink-0 w-[480px] shadow-2xl bg-gray-100">
                                    <h1 className="text-3xl text-center mt-5 font-semibold">Registation <span className="text-blue-400">Here</span></h1>

                                    <form onSubmit={handlesubmit} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Image</span>
                                            </label>
                                            <input name='image' type="url" placeholder="Image" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                                        </div>
                                        <div className="form-control mt-6">


                                            <input type="submit" value="submit" className="btn bg-black text-white text-bold" />


                                        </div>
                                        <p className='p-4 text-center'>Or</p>
                                        <div>
                                            <button onClick={handlegoogle} className='btn btn-outline hover:btn-ghost w-full '>
                                                <FcGoogle className='text-xl' /> Google
                                            </button>
                                        </div>
                                    </form>
                                    <p className='font-bold text-center mb-5'>Already Have an Account <Link to={'/login'} className='text-red-500'>Register</Link></p>
                                    <p className="text-center">
                                        {
                                        passwrong && <span className=" text-red-400">{passwrong}</span>
                                    }
                                    </p>
                                    <div>
                                        {
                                            error && <p className="text-red-400 font-bold text-center mt-4">{error}</p>
                                        }
                                    </div>
                                    <div>
                                        {
                                            error && <p>{error.message}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Fotter />
            </div>
        </div>
    );
};

export default Register;