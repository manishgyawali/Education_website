import React, { useState } from 'react'
import images from "../../assets/pagebanner1.jpg"
import images1 from "../../assets/pagebanner.jpg"
import images2 from "../../assets/learning.jpg"

const Slider = () => {
    const [index,setindex] = useState(0)
    const imageData = [
        {
            image: images
        },
        {
            image: images1
        },
        {
            image: images2
        },
        {
            image: images
        },
        {
            image: images1
        },
        {
            image: images2
        },
        {
            image: images
        },
        {
            image: images1
        },
        {
            image: images2
        },
    ]
  return (
    <div>
        {imageData.map((val,i)=>{
        if(i===index){
        return(
            <div className='flex justify-center'>
                <img key={i} src={val.image} alt=""  className='h-[35rem]  '/>

               
            </div>
        )
    }
            
        })}
         <div className='flex gap-8 mt-10 items-center justify-center'>

             <button className='px-4 py-2 bg-red-300' onClick={()=>{
                 if(index==0){
                     setindex(imageData.length-1);
                    }
                    else {
                    setindex(index-1)

                }
             }}>Previous</button>


                <button className='px-4 py-2 bg-red-300' onClick={()=>{
                    if(index==imageData.length -1){
                        setindex(0);
                    }
                    else {
                        setindex(index+1)

                    }
                }}>Next</button>
                </div>
    </div>
  )
}

export default Slider