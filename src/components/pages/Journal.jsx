import React from 'react'
import Banner from './../UI/Banner';
import Blog from '../Blog/Blog';

const Journal = () => {
  return (
    <div>
     < Banner title={"Blog Posts"}/>
    <div className='mt-52 pt-40'>
    <Blog/>
    </div>
    </div>
  )
}

export default Journal