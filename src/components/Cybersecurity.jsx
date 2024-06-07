import React from 'react'
import Showcard from './Showcard'
import img1 from './../assets/img-cyber/img1.webp'
import img2 from './../assets/img-cyber/img2.webp'
import img3 from './../assets/img-cyber/img3.jpg'
import img4 from './../assets/img-cyber/img4.webp'
import img5 from './../assets/img-cyber/img5.webp'
import img6 from './../assets/img-cyber/img6.jpg'
import img7 from './../assets/img-cyber/img7.jpg'
import img8 from './../assets/img-cyber/img8.webp'
import img9 from './../assets/img-cyber/img9.webp'
import img10 from './../assets/img-cyber/img10.webp'

function Cybersecurity() {
  let data = [
    {
      title:"cybersecurity vs ethical hacking: top 10 differences",
      image:img1
    },
    {
      title:"Non coding jobs in cybersecurity:a comprehensive guide",
      image:img2
    },
    {
      title:"cybersecurity vs artificial intelligence | better career",
      image:img3
    },
    {
      title:"what is hacking?types of hacking & more",
      image:img4
    },
    {
      title:"8 different types of cybersecurity and threats involved",
      image:img5
    },
    {
      title:"what is cybersecurity?importance and its uses & the growing challenge",
      image:img6
    },
    {
      title:"is coding required for cybersecurity?",
      image:img7
    },
    {
      title:"the ultimate cybersecurity roadmap for beginners",
      image:img8
    },
    {
      title:"the cybersecurity surge: 5 must- have cybersecurity certifications",
      image:img9
    },
    {
      title:"how is cyber security important to our lives?",
      image:img10
    }
  ]
  return <>
   <div className='card-wrapper'>
    <Showcard data={data}/>
   </div>
  
  </>
}

export default Cybersecurity