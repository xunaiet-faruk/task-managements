

const Createtask = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center italic">PLEASE WRITE YOUR <span className="text-red-500">TASK HERE</span></h1>
          <div className="ml-12 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mt-8 gap-5">
                <input type="text" placeholder="Type here" className="input bg-gray-100 input-bordered input-info w-full " />
                <input type="text" placeholder="Type here" className="input bg-gray-100 input-bordered input-info w-full " />

    </div>   
<div className="ml-12 mt-5">
    
                <input type="text" placeholder="Type here" className="input bg-gray-100 input-bordered input-info w-full" />
                <textarea className="textarea-info bg-gray-100 rounded-md mt-4" placeholder="Type here your Task details" name="" id="" cols="130" rows="5"></textarea>
    </div>   
    <div className="ml-12">
        
        <input type="submit" value="Submit Task"  className="btn btn-primary w-full mt-2"/>
        
        </div>  
        </div>
    );
};

export default Createtask;