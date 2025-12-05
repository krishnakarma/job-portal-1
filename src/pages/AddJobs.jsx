/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css' // ✅ Important: import the Quill CSS
import { JobCategories, JobLocations } from '../assets/assets'
import JobListing from '../components/JobListing'

const AddJobs = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('Bangalore')
  const [category, setCategory] = useState('Programming')
  const [level, setLevel] = useState('Beginner level')
  const [salary, setSalary] = useState(0)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  useEffect(() => {
    // ✅ Initialize Quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Write the job description here...',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['link', 'blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['clean']
          ]
        }
      })
    }
  }, [])

  return (
    <form className='container p-4 flex flex-col w-full items-start gap-3'>
      <div className='w-full'>
        <p className='mb-2'>Job Title</p>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Type here'
          required
          className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'
        />
      </div>

      <div className='w-full max-w-lg'>
        <p className='my-2'>Job Description</p>
        <div
          ref={editorRef}
          className='h-48 border rounded bg-white'
        ></div> {/* ✅ Visible area for Quill */}
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
            <p className='mb-2'>
              Job Category  
            </p>
            <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCategory(e.target.value)}>
                {
                    JobCategories.map((category,index)=>(
                        <option key={index} value={category}>{category}</option>
                    ))
                }
            </select>
        </div>
        <div>
            <p className='mb-2'>
              Job Location  
            </p>
            <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLocation(e.target.value)}>
                {
                    JobLocations.map((location,index)=>(
                        <option key={index} value={location}>{location}</option>
                    ))
                }
            </select>
        </div>
        <div>
            <p className='mb-2'>
              Job level  
            </p>
            <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLevel(e.target.value)}>
                <option value="Begineer level">Begineer level</option>
                <option value="intermediate level">intermediate level</option>
                <option value="Senior level">Senior level</option>
            </select>
        </div>
      </div>
      <div>
        <p className='mb-2'>Job Salary</p>
        <input min={0} className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' onChange={e => setSalary(e.target.value)} type="Number" placeholder='2500' />
      </div>

      <button className='w-28 mt-4 bg-black text-white rounded'>ADD</button>
    </form>
  )
}

export default AddJobs
