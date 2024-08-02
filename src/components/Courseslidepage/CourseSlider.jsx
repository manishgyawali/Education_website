import React from 'react'
import { coursesliderData } from './courseSlider'


const CourseSlider = () => {
  return (
    <div>
    {coursesliderData.map((val,i)=>{
      <h1 key={i}> {val.heading}</h1>
    })}
    </div>
  )
}

export default CourseSlider