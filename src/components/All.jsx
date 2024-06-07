import React from 'react'
import img1 from './../assets/img-all/img1.jpg'
import img2 from './../assets/img-all/img2.jpg'
import img3 from './../assets/img-all/img3.png'
import img4 from './../assets/img-all/img4.jpg'
import img5 from './../assets/img-all/img5.jpg'
import img6 from './../assets/img-all/img6.jpg'
import img7 from './../assets/img-all/img7.png'
import img8 from './../assets/img-all/img8.png'
import img9 from './../assets/img-all/img9.jpg'
import img10 from './../assets/img-all/img10.jpg'
import Showcard from './Showcard'

function All() {
  let data = [
    {
      title:"Vue vs React: Which is the Better Framework?",
      image:img1
    },
    {
      title:"Difference between React.js and React Native?",
      image:img2
    },
    {
      title:"How to style your react apps with less code using tailwind css and styled components",
      image:img3
    },
    {
      title:"building a web app with headless CMS and react",
      image:img4
    },
    {
      title:"Visual guide to state in react",
      image:img5
    },
    {
      title:"the hands-on guide to learning react hooks",
      image:img6
    },
    {
      title:"Use the react profiler component to measure render performance",
      image:img7
    },
    {
      title:"react/redux links",
      image:img8
    },
    {
      title:"developer productivity tips from the react experts",
      image:img9
    },
    {
      title:"Timeline for Learning React",
      image:img10
    }
  ]
  return <>
  <div className='card-wrapper'>
    <Showcard data={data}/>
  </div>
  </>
}

export default All