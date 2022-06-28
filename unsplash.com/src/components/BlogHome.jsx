import React from 'react'
import "../styles/blog_home.css"
import { Blogcard } from './Blogcard'
import { Blogcard1 } from './Blogcard1'
import { Blogcard2 } from './Blogcard2'

export const BlogHome = () => {
  const data = [
    {
      id:1,
      url: "https://unsplash.com/blog/content/images/size/w1000/2022/06/A_look_back_at_May_-Blog--1.jpeg",
      type: "Announcement",
      title:"Unsplash ✕ DeepMind",
      by: "Natalie Brennan - ",
      date: "June 20, 2022"
    },
    {
      id:2,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/05/Tim--Blog--2.jpg",
      type: "Announcement",
      title:"Meet the Unsplash Team",
      by: "Natalie Brennan - ",
      date: "June 7, 2022"
    },
    {
      id:3,
      url: "https://unsplash.com/blog/content/images/size/w1000/2022/06/A_look_back_at_May_-Blog--1.jpeg",
      type: "Announcement",
      title:"A look back on May",
      by: "Annie spratt - ",
      date: "June 7, 2022"
    },
    {
      id:4,
      url: "https://unsplash.com/blog/content/images/size/w1000/2022/06/A_look_back_at_May_-Blog--1.jpeg",
      type: "Announcement",
      title:"A look back on May",
      by: "Annie spratt - ",
      date: "June 7, 2022"
    },
    {
      id:5,
      url: "https://unsplash.com/blog/content/images/size/w1000/2022/06/A_look_back_at_May_-Blog--1.jpeg",
      type: "Announcement",
      title:"A look back on May",
      by: "Annie spratt - ",
      date: "June 7, 2022"
    },
    {
      id:6,
      url: "https://unsplash.com/blog/content/images/size/w1000/2022/06/A_look_back_at_May_-Blog--1.jpeg",
      type: "Announcement",
      title:"A look back on May",
      by: "Annie spratt - ",
      date: "June 7, 2022"
    },
    {
      id:7,
      url: "https://unsplash.com/blog/content/images/size/w1000/2022/06/A_look_back_at_May_-Blog--1.jpeg",
      type: "Announcement",
      title:"A look back on May",
      by: "Annie spratt - ",
      date: "June 7, 2022"
    },
    {
      id:8,
      url: "https://unsplash.com/blog/content/images/size/w1000/2022/06/A_look_back_at_May_-Blog--1.jpeg",
      type: "Announcement",
      title:"A look back on May",
      by: "Annie spratt - ",
      date: "June 7, 2022"
    },
    {
      id:9,
      url: "https://unsplash.com/blog/content/images/size/w1000/2022/06/A_look_back_at_May_-Blog--1.jpeg",
      type: "Announcement",
      title:"A look back on May",
      by: "Annie spratt - ",
      date: "June 7, 2022"
    }
  ]



  return (
    <div>
      <div className='head'>
            Unsplash Blog
        </div>
        <div className='subHeading'>
            Stories from the community powering the internet’s visuals
        </div>
        <div className='feature'>
            Featured
        </div>
        <div className='mainCard'>
            <Blogcard1 />
            <Blogcard2 />
        </div>
        <div className='feature'>
            Latest from the team
        </div>
        <div className='smallCard'>
            {
              data.map((item)=>(
                <div key={item.id}>
                  <Blogcard data={item}/>
                </div>
              ))
            }
        </div>
    </div>
  )
}
