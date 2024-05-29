import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext';
import Spinner from './Spinner';
 const Blog = () => {
  const {post,loading} = useContext(AppContext);
  
  return (
    <div className='w-11/12 max-w-[670px] py-5 flex flex-col gap-y-7 mt-[67px] mb-[67px] items-center justify-center h-screen'>
      {
        loading ? (<Spinner/>) : (
          post.length === 0 ? (<div> <p> No Post found  </p></div>) : 
          (post.map( (p) =>{
            return <div key={p.id}>
              <p className='mb-1 text-lg font-bold '>{p.title}</p>
              <p className='mb-1 text-sm font-semibold'>By <span className='italic '>{p.author}</span> On <span className='font-bold underline'> {p.category} </span></p>
              <p className='text-[14px] mb-2'> Posted  on <span> {p.date} </span></p>
              <p className='mb-1 text-[16px]'>{p.content}</p>
              <div className='flex gap-2 text-xs font-bold text-blue-700'>
                {
                  p.tags.map((tag, index) => {
                    return <span className='underline' key={index}>{`#${tag}`}</span>
                  })
                }
              </div>
            </div>
          }))
        )
      }
    </div>
  )
}

export default Blog;