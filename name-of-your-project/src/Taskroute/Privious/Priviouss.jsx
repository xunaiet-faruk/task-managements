/* eslint-disable react/prop-types */
import Usealltask from "../../Hooks/Usealltask";
import { MdCancel } from "react-icons/md";
import Useaxios from "../../Hooks/Useaxios";
import Swal from "sweetalert2";


const Priviouss = () => {

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
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4">
        {

data?.map(item =><div className="ml-5" key={item.id}>
    <div className="card w-[500px] h-[300px] bg-base-100 mb-6 shadow-xl">
        <div className="card-body ">
            <div className="card-actions justify-end">
               
                    <MdCancel onClick={() =>handleDeleted(item._id)} className="text-2xl hover:text-red-600"/>
             
                </div>
       <h1 className="text-xl font-bold text-center">Task</h1>
       <hr  className="font-bold"/>
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
    );
};

export default Priviouss;