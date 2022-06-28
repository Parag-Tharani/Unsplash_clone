import React from 'react'
import "../styles/blog_card.css"

export const Blogcard = (props) => {
    const datas = props.data;
    const imgStyle = {
      width: "100%",
      height:"15rem"
    }
    const cardStyle = {
      height: "28rem"
    }
  return (
    <div className='card' style={cardStyle}>
      <div>
          <img src={datas.url} alt="" style={imgStyle}/>
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