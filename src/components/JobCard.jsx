import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const JobCard = ({ job }) => {
  const navigate = useNavigate()
  return (
    <div className="border p-6 shadow rounded-xl flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300">
      
      {/* Top Section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <img className="h-8" src={assets.company_icon} alt="Company logo" />
        </div>

        <h4 className="font-semibold text-lg mb-2">{job.title}</h4>

        <div className="flex items-center gap-3 mb-3 text-xs">
          <span className="bg-blue-50 border border-blue-200 text-gray-700 px-4 py-1.5 rounded">
            {job.location}
          </span>
          <span className="bg-red-50 border border-red-200 text-gray-700 px-4 py-1.5 rounded">
            {job.level}
          </span>
        </div>

        {/* Limit description to 3 lines */}
        <p
          className="text-gray-500 text-sm mb-6 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: job.description.slice(0, 150),
          }}
        ></p>
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-4 text-sm mt-auto">
        <button onClick={()=>{navigate(`/apply-job/${job._id}`) ;scrollTo(0,0)}} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Apply now
        </button>
        <button onClick={()=>{navigate(`/apply-job/${job._id}`) ;scrollTo(0,0)}} className="text-gray-600 border border-gray-400 px-4 py-2 rounded hover:bg-gray-50 transition">
          Learn more
        </button>
      </div>
    </div>
  )
}

export default JobCard
