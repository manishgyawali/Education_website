import React from 'react'
import Banner from './../UI/Banner';
import Blog from '../Blog/Blog';

const Journal = () => {
  return (
    <div>
     < Banner/>
    <div className='mt-96 pt-40'>
    <Blog/>
    </div>
    </div>
  )
}

export default Journal