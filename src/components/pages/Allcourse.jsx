import React from 'react'
import Banner from '../UI/Banner'
import AllCourse from '../AllCourses/AllCourse'
import CourseSlider from '../OnlinercourseSlider/CourseSlider'
 
const Allcourse = () => {
  return (
    <div >
 <div>
 <Banner title={"All Course"}  />
 </div>

<div className='mt-52'>
<CourseSlider/>

</div>

    </div>
  )
}

export default Allcourse