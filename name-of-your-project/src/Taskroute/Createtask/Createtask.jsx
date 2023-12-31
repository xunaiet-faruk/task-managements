import Swal from "sweetalert2";
import Useaxios from "../../Hooks/Useaxios";
import { useContext } from "react";
import { Authcontext } from "../../Authentication/Provider/Authprovider";


const Createtask = () => {
    const {user} =useContext(Authcontext)
    const axiosHooks =Useaxios()
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const title =e.target.title.value
        const deadlines =e.target.deadlines.value
        const details = e.target.details.value
        const priority =e.target.priority.value
       const Alddata = {title,deadlines,details,priority}
       const res =await axiosHooks.post("/Task",Alddata)
        if (res.data.insertedId) {
            console.log(res.data);
            Swal.fire({
                icon: 'success',
                text: 'Successfully Post announcement!'
            })
        }
       
    }
    return (
        <div>
            <div className="flex justify-center items-center lg:gap-5 ">
                <h1 className="text-4xl font-bold text-center mr-8 italic">PLEASE WRITE YOUR <span className="text-red-500">TASK HERE  </span></h1>
                <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
            </div>
 <form onSubmit={handleSubmit}>
    
                <div className="lg:ml-12 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mt-8 gap-5">
                    <input type="text" name="title" placeholder="Type Title" className="input bg-gray-100 input-bordered input-info w-full " />
                    <select name="deadlines" className="input bg-gray-100 input-bordered input-info w-full " id="">
                        <option value="2 day">2 day deadlines</option>
                        <option value="4 day">4 day deadlines</option>
                        <option value="5 day">5 day deadlines</option>
                        <option value="6 day">6 day deadlines</option>
                    </select>
                </div>
                <div className="lg:ml-12 mt-5">
                    <select name="priority" className="input bg-gray-100 input-bordered input-info w-full " id="">
                        <option value="Low">Low </option>
                        <option value="moderate">moderate </option>
                        <option value="high">high </option>
                        <option value="Admin">Admin </option>
                    </select>

                    <textarea name="details" className="textarea-info bg-gray-100 rounded-md mt-4" placeholder="Type here your Task details" id="" cols="55" rows="5"></textarea>
                </div>
                <div className="lg:ml-12">

                    <input type="submit" value="Submit Task" className="btn btn-primary w-full mt-2" />

                </div>
    
    
    </form>  
        </div>
    );
};

export default Createtask;