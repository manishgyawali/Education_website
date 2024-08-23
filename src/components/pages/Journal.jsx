import React from 'react'
import Banner from './../UI/Banner';
import Blog from '../Blog/Blog';
import { blogData } from '../Data/Blogdata';

const Journal = () => {
  return (
    <div>
     < Banner title={"Blog Posts"}/>
    <div className='mt-52 pt-40'>
    <Blog lastindex={blogData.length-1} isJournalPage={true} />
    </div>
    </div>
  )
}

export default Journal