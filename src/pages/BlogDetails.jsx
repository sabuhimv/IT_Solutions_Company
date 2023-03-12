import React from 'react'
import BlogCommentsRespond from '../components/BlogCommentsRespond'
import BlogDetailsArea from '../components/BlogDetailsArea'
import BlogDetailsComments from '../components/BlogDetailsComments'
import PagesHead from '../components/PagesHead'

const BlogDetails = () => {
  return (
    <div>
        <PagesHead pages_name={"Blog Details"}/>
        <BlogDetailsArea/>
        <BlogDetailsComments/>
        <BlogCommentsRespond/>
    </div>
  )
}

export default BlogDetails