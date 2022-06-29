import React from 'react'
import "../styles/blog_home.css"
import { Blogcard } from './Blogcard'
import { Blogcard1 } from './Blogcard1'
import { Blogcard2 } from './Blogcard2'
import { BlogFooter } from './BlogFooter'

export const BlogHome = () => {
  var data = [
    {
      id:1,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/06/DeepMind--Blog-.jpg",
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
      url: "https://unsplash.com/blog/content/images/size/w600/2022/06/Amy-Shamblen--Twitter-.jpg",
      type: "Community",
      title:"Meet Amy Shamblen",
      by: "Alex -Begin - ",
      date: "June 9, 2022"
    },
    {
      id:4,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/06/pride-Twitter-.jpg",
      type: "Announcement",
      title:"Pride in Open Photography",
      by: "Alex Begin - ",
      date: "June 1, 2022"
    },
    {
      id:5,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/05/The-Importance-of-Editing--Blog--3.jpg",
      type: "Announcement",
      title:"How editing can Transform an Image",
      by: "Alex Begin - ",
      date: "May 24, 2022"
    },
    {
      id:6,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/04/Bruno--Blog--1.jpg",
      type: "Announcement",
      title:"Meet the Unsplash Team : Bruno Aguirre ",
      by: "Natalie Brennan - ",
      date: "May 18, 2022"
    },
    {
      id:7,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/05/Color-of-Water-Winners--Twitter--2.gif",
      type: "Announcement",
      title:"Top 15: Color of Water",
      by: "Natalie Brennan - ",
      date: "May 12, 2022"
    },
    {
      id:8,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/05/Frankie_Cordoba_-Twitter--3.jpeg",
      type: "Community",
      title:"Meet Frankie Cordoba",
      by: "Natalie Brennan - ",
      date: "May 11, 2022"
    },
    {
      id:9,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/05/April-Round-up--Blog-.jpg",
      type: "Announcement",
      title:"A look back on April",
      by: "Annie spratt - ",
      date: "May 6, 2022"
    },
    {
      id:10,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/05/Motherhood--Blog--2.jpg",
      type: "Community",
      title:"Motherhood & Photography",
      by: "Alex Begin - ",
      date: "May 5, 2022"
    },
    {
      id:11,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/05/Spring--Blog-.jpg",
      type: "Announcement",
      title:"Fresh wapys to capture the Spring",
      by: "Alex Begin - ",
      date: "May 3, 2022"
    },
    {
      id:12,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/04/Olly--Blog-.jpg",
      type: "Announcement",
      title:"Meet the Unsplash Team: Olly Ash",
      by: "Natalie Brennan - ",
      date: "May 2, 2022"
    }
  ]
  const [data2, setdata] = React.useState(data);
  var data1 = [
    {
      id:1,
      url: "https://unsplash.com/blog/content/images/size/w600/2022/06/DeepMind--Blog-.jpg",
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
      url: "https://unsplash.com/blog/content/images/size/w600/2022/06/Amy-Shamblen--Twitter-.jpg",
      type: "Community",
      title:"Meet Amy Shamblen",
      by: "Alex -Begin - ",
      date: "June 9, 2022"
    }
  ]
  const more = () => {
    data = data.concat(data1);
    setdata(data);
    console.log(data);
  }

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
              data2.map((item)=>(
                <div key={item.id}>
                  <Blogcard data={item}/>
                </div>
              ))
            }
        </div>
        <div style={{marginTop: "10rem",textAlign: "center"}}>
          <button className='loadButton' onClick={more}>Load More Posts</button>
        </div>
        <div>
          <BlogFooter />
        </div>
    </div>
  )
}
