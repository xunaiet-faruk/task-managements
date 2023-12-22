/* eslint-disable react/prop-types */
import Usealltask from "../../Hooks/Usealltask";
import { MdCancel } from "react-icons/md";
import Useaxios from "../../Hooks/Useaxios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { Authcontext } from "../../Authentication/Provider/Authprovider";


const Priviouss = () => {
const {user} =useContext(Authcontext)
console.log("hellow",user);
 const axiosHooks =Useaxios()
    const [data, isPending,refetch]=Usealltask()

    const handleDeleted = id =>{
       axiosHooks.delete(`/Task/${id}`)
       .then(res => {
           if (res.data.deletedCount > 0){
               refetch();
               Swal.fire({
              
                   position: "top-end",
                   icon: "success",
                   title: "Your work has been Deleted",
                   showConfirmButton: false,
                   timer: 1500
               });
           }
       })
        
    }
   
    if (isPending) {
        return <progress className="progress w-56"></progress>
    }
    return (
       <div>
        <div className="flex justify-between mx-auto ml-5">
            <h1 className="text-xl text-red-500 font-bold lg:ml-12">To do</h1>
            
                <h1 className="text-xl text-blue-500 font-bold  mr-5">Ongoing</h1>
                <h1 className="text-xl text-green-500 font-bold mr-32">completed</h1>
        </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1" >
                {

                    data?.map(item => <div className="ml-5" key={item.id} >
                        <div className="card w-[280px] h-[270px] bg-base-100 mb-6 shadow-xl">
                            <div className="card-body ">
                                <div className="card-actions justify-end">

                                    <MdCancel onClick={() => handleDeleted(item._id)} className="text-2xl hover:text-red-600" />

                                </div>
                              
                                <p className="text-black font-bold text-xl">Title : {item?.title}</p>
                                <p>Task : {item?.details}</p>
                                <p className="font-semibold">priority : {item?.priority}</p>
                                <p>Deadline : <span className="text-red-600">{item?.deadlines}</span></p>
                            </div>
                        </div>
                    </div>
                    )

                }
            </div>
       </div>
    );
};

export default Priviouss;