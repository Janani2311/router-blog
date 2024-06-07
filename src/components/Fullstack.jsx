import React from 'react'
import img1 from './../assets/img-fullstack/img1.jpg'
import img2 from './../assets/img-fullstack/img2.jpg'
import img3 from './../assets/img-fullstack/img3.jpg'
import img4 from './../assets/img-fullstack/img4.jpg'
import img5 from './../assets/img-fullstack/img5.jpg'
import img6 from './../assets/img-fullstack/img6.png'
import img7 from './../assets/img-fullstack/img7.jpg'
import img8 from './../assets/img-fullstack/img8.jpg'
import img9 from './../assets/img-fullstack/img9.png'
import img10 from './../assets/img-fullstack/img10.png'
import Showcard from './Showcard'
function Fullstack() {
  let data = [
    {
      title:"Best FUll-Stack Development Project Ideas in 2024",
      image:img1
    },
    {
      title:"How long would it take to be a full stack developer",
      image:img2
    },
    {
      title:"How does apache work?a detailed introduction to apache",
      image:img3
    },
    {
      title:"10 best database management systems for software developers",
      image:img4
    },
    {
      title:"hot topics that you need to know in full stack developer syllabus",
      image:img5
    },
    {
      title:"top 10 full stack developer frameworks in 2024",
      image:img6
    },
    {
      title:"6 essentials prerequisites for learning reactJS",
      image:img7
    },
    {
      title:"best web development roadmap for beginners 2024",
      image:img8
    },
    {
      title:"full stack developer roadmap:a complete guide[2014]",
      image:img9
    },
    {
      title:"java full stack development course",
      image:img10
    }
  ]
  return <>
  <div className='card-wrapper'>
    <Showcard data={data}/>
  </div>
  </>
}

export default Fullstack