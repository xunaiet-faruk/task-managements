import { useEffect, useState } from "react";


const Benefits = () => {
    const [benefi, setBenifi] =useState([])
    useEffect(()=>{
        fetch('/Benefits.json')
        .then(res => res.json())
        .then(data =>setBenifi(data))
    },[])
    return (
        <div className="">
            <h1 className="text-black text-center font-bold  italic mt-12  text-5xl">User Diversity</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 max-w-screen-xl mx-auto mt-20">

         {

benefi?.map(item => <div key={item.id}>
    <div className="h-[370px] bg-base-100 shadow-xl hover:shadow-yellow-200 image-full">
        <figure><img className="w-full h-[240px]" src={item?.image} alt="Shoes" /></figure>
        <div className="card-body">
            <h1 className="text-black text-xl font-bold">{item?.profession}</h1>
           
            <p className="font-semibold text-black">{item?.benefit}</p>
           
        </div>
    </div>
    </div>)


         }

            </div>
        </div>
    );
};

export default Benefits;