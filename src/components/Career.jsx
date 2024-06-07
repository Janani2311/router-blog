import React from 'react'
import Showcard from './Showcard'
import img1 from './../assets/img-career/img1.webp'
import img2 from './../assets/img-career/img2.webp'
import img3 from './../assets/img-career/img3.webp'
import img4 from './../assets/img-career/img4.webp'
import img5 from './../assets/img-career/img5.webp'
import img6 from './../assets/img-career/img6.webp'
import img7 from './../assets/img-career/img7.webp'
import img8 from './../assets/img-career/img8.webp'
import img9 from './../assets/img-career/img9.webp'
import img10 from './../assets/img-career/img10.webp'

function Career() {
  let data = [
    {
      title:"the influence of chatbots on customer services: benefits and impact",
      image:img1
    },
    {
      title:"apple's vision pro: a deep dive into tech specs, applications, & more",
      image:img2
    },
    {
      title:"retrieval augmented generation: important things you need to know about[2024]",
      image:img3
    },
    {
      title:"top 7 important engineering project ideas using chatgpt",
      image:img4
    },
    {
      title:"top 10 pattern recognition project ideas[2024]",
      image:img5
    },
    {
      title:"best practices for prompt engineering in 2024",
      image:img6
    },
    {
      title:"advantages and disadvantages of AI: a comprehansive guide[2024]",
      image:img7
    },
    {
      title:"7 unique machine learning capstone projects to boost your resume",
      image:img8
    },
    {
      title:"generative AI vs predictive AI: A comprehensive guide for 2024",
      image:img9
    },
    {
      title:"10 skills required to become a UI/UX designer",
      image:img10
    }
  ]
  return <>
      <div className='card-wrapper'>
        <Showcard data={data}/>
      </div>
  </>
}

export default Career