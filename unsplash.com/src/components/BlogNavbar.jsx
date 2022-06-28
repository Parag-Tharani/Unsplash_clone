import React from 'react'
import '../styles/blog_navbar.css'
import { BlogHome } from './BlogHome'

export const BlogNavbar = () => {
  return (
    <div>
        <div className='blog-nav'>
        <div className='logo'>
            <a class="navigation__logo" href="" >
                <svg viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" fill-rule="nonzero"></path>
                </svg>
            </a>
        </div>
        <div className='links'>
            <a href="">
                Home
            </a>
            <a href="">
                Announcements
            </a>
            <a href="">
                Product
            </a>
            <a href="">
                Brands
            </a>
            <a href="">
                Partnerships
            </a>
            <a href="">
                Community
            </a>
        </div>
        <div className='home-links'>
        <a href="">
        unsplash.com ↗
        </a>
        </div>
        </div>
        <BlogHome />
    </div>
  )
}

