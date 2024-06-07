import React from 'react'
import Showcard from './Showcard'
import img1 from './../assets/img-datascience/img1.webp'
import img2 from './../assets/img-datascience/img2.webp'
import img3 from './../assets/img-datascience/img3.webp'
import img4 from './../assets/img-datascience/img4.webp'
import img5 from './../assets/img-datascience/img5.webp'
import img6 from './../assets/img-datascience/img6.webp'
import img7 from './../assets/img-datascience/img7.webp'
import img8 from './../assets/img-datascience/img8.webp'
import img9 from './../assets/img-datascience/img9.jpg'
import img10 from './../assets/img-datascience/img10.webp'

function Datascience() {
  let data = [
    {
      title:"top 10 high paying non-coding jobs in data science in 2024",
      image:img1
    },
    {
      title:"12 real-world data science examples:power of data science",
      image:img2
    },
    {
      title:"can a commerce student do data science?",
      image:img3
    },
    {
      title:"top product-based companies for data scientists in 2024",
      image:img4
    },
    {
      title:"roles and responsibilities of a data scientist",
      image:img5
    },
    {
      title:"how long would it take to learn data science?",
      image:img6
    },
    {
      title:"everything about data scientist salary in india|2024",
      image:img7
    },
    {
      title:"10 best data science online courses for beginners | 2024",
      image:img8
    },
    {
      title:"how to become a data scientist after mechanical engineering",
      image:img9
    },
    {
      title:"science in 2024: beginer to expert",
      image:img10
    }
  ]
  return <>
   <div className='card-wrapper'>
    <Showcard data={data}/>
   </div>
  
  </>
}

export default Datascience