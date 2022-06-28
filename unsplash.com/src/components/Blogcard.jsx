import React from 'react'
import "../styles/blog_card.css"

export const Blogcard = (props) => {
    const datas = props.data;


  return (
    <div className='card'>
      <div>
          <img src={datas.url} alt="" />
          <div className='detail' >
          <h5>{datas.type}</h5>
          <h2>{datas.title}</h2>
          <span>{datas.by}</span>
          <span>{datas.date}</span>
          </div>
      </div>
    </div>
  )
}