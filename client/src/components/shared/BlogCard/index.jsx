import React from 'react'
import './style.css'

const BlogCard = ({image,desc,title,date,commentCount}) => {
  return (
    <div>
        <a className="max-w-lg flex flex-col items-center"
    href="#">
    <div className='blogimg'><img src={image} /></div>
    <div className="mt-8">
        <div><p><span className='blogdate'>{date}</span> <span>{commentCount}</span></p></div>
        <h4 className="blogtitle">{title}</h4>
        <p className="blogdesc">{desc}
        </p>
        <div className="mt-5">
            <button type="button" className="blogbtn">Read More</button>
        </div>
    </div>
</a>
    </div>
  )
}

export default BlogCard