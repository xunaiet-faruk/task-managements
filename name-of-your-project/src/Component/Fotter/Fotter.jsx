import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
const Fotter = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <footer className="footer footer-center p-10 bg-gray-100 mt-16 text-black">
                <aside>
                    <img className='w-20' src={"https://i.ibb.co/v3NWXZc/image.png"} alt="" />

                    <p className="font-bold">
                        ACME Industries Ltd. <br />Providing reliable tech since 1992
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/junaiet-faruk-0451a72a3"><FaLinkedin className="text-2xl"/></a>
                        <a href="https://www.instagram.com/xunaiet"><RiInstagramFill  className="text-2xl"/></a>
                        <a href="https://www.facebook.com/?_rdc=1&_rdr"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Fotter;