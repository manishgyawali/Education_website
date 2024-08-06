import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";

const Nav2 = () => {
  return (
    <div className='flex justify-between w-11/12 py-5 mx-auto'>
        <div>
            <h1 className='font-bold text-2xl cursor-pointer hover:text-customgreen duration-500'>ACADEMIA</h1>
        </div>
        <div>
        <RiMenu3Fill className='text-3xl text-customgreen' />
        </div>
    </div>
  )
}

export default Nav2