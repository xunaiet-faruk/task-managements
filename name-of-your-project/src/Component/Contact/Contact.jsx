import Swal from "sweetalert2";
import Fotter from "../Fotter/Fotter";
import Navbar from "../Navbar/Navbar";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_xg7r6s7', 'template_de8a4rd', form.current, 'XawkCasZRx1zgag4J')
            .then((result) => {

                if (result) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for your interest in me",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <Navbar/>
            <div className="max-w-screen-xl mx-auto">
                <div className="hero min-h-screen w-full" style={{ backgroundImage: 'url(https://i.ibb.co/G3wSqgQ/image.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Contact Us Here</h1>
                        
                        </div>
                    </div>
                </div>


            </div>
           
            <div>
              
                <div className='lg:flex justify-evenly lg:p-5 ' >
                  
                    <div className="mt-12 flex justify-center  items-center " 
                        >
                            
                        <form ref={form} onSubmit={sendEmail} className=''>
                            
                            <input type="text" name="user_name" placeholder="Type here" className="input mr-2 lg:ml-10 md:ml-0 mb-5 w-[300px] lg:w-[600px] input-bordered input-success" /><br />
                        

                            <input type="text" placeholder="Type here" className="input mb-5 input-bordered lg:ml-10 input-success w-[300px]   lg:w-[600px]" name="user_email" /> <br />
                          
                            <textarea name="message" className="textarea  textarea-accent w-[300px] lg:ml-10  lg:w-[600px]" placeholder="Bio" /><br />
                            {/* <input className='bn5' type="submit" value="Send" />  */}
                            <button className='bg-black p-2 rounded-xl hover:bg-yellow-500 w-[300px]  lg:w-[600px] lg:ml-10 mt-5' value="Send"><span className='text-transparent bg-clip-text font-bold bg-gradient-to-r from-purple-200 text-xl to-pink-600'>Send</span></button>
                            {/* hellow */}

                        </form>

                    </div>
                    <div>
                        <img className='lg:w-[600px]  w-[500px] lg:ml-0   md:ml-24' src={"https://i.ibb.co/ysVrsHL/image.png"} alt="" />
                    </div>
                    
                </div>
                <div className="flex justify-center gap-2 mb-2 max-w-screen-xl mx-auto">
                    <FaWhatsapp className="text-xl text-green-700" /> <span className="font-bold">
                        +8801882239828
                    </span>
                </div>
                <div className="flex justify-center gap-2 mb-2 max-w-screen-xl mx-auto  ">
                    <MdOutlineMarkEmailRead className="text-xl text-red-700" /> <span className="font-bold">
                       Xunaiet28@gmail.com
                    </span>
                </div>
                <div className="flex justify-center gap-2 max-w-screen-xl mx-auto  ">
                    <CiLocationOn className="text-xl text-blue-700" /> <span className="font-bold">
                    Chiitagong,Bangladesh
                    </span>
                </div>
            </div>
          
            <Fotter/>
        </div>
    );
};

export default Contact;