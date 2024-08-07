import React from 'react'
import Banner from '../UI/Banner'
import AllCourse from '../AllCourses/AllCourse'
import CourseSlider from '../OnlinercourseSlider/CourseSlider'
 
const Allcourse = () => {
  return (
    <div >
 <div>
 <Banner title={"Explore Courses"}  />
 </div>

<div className='mt-52 md:mt-80 lg:mt-[35rem]'>
<CourseSlider/>

</div>

    </div>
  )
}

export default Allcourse