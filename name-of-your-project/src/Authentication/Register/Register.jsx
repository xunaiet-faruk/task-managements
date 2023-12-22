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
        const name = e.target.Name.value;
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
            <div className="card mt-12 flex-shrink-0 lg:w-[600px] mb-20 md:w-[550px] w-[400px] shadow-2xl bg-base-100 max-w-screen-7xl mx-auto ">
                <h1 className="text-white  bg-black p-7 rounded-t-lg text-center font-bold text-2xl">Register HERE... </h1>
                <form onSubmit={handlesubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="Name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="url" name="image" placeholder="Photo" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                    <div className="text-center text-black font-bold">
                        <p >You'r New User Go To <Link to={'/login'} className="text-blue-600">Login</Link></p>
                    </div>
                </form>
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
                <div className="text-center">
                    <button onClick={handlegoogle} className="btn btn-outline bg-black lg:px-52 mb-4 w-full  rounded-b-xl boreder  text-md hover:bg-black text-white mt-4 font-semibold">
                        <FcGoogle className="text-2xl ml-2"> </FcGoogle>   Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;