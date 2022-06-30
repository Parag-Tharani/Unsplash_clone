import React from 'react'
import "../styles/blog_footer.css"

export const BlogFooter = () => {
  return (
    <div className='footer'>
        <div className='border'></div>
        <div className='footer_links'>
            <div>
            <span className='logo'>
                <svg viewBox="0 0 32 32" width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon icon--unsplash">
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" fill-rule="nonzero"></path>
                </svg>
            </span>
            <span className='logoHeading'>
                Make something awesome
            </span>
            </div>
            <div className='three_links'>
                <span>About</span>
                <span>Press</span>
                <span>Join the team</span>
            </div>
        </div>
    </div>
  )
}
