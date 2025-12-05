/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext(); // create a global

export const AppContextProvider = (props) => {
  const [searchFilter , setSearchFilter] = useState({
    title:'',
    location:''
  })
  const [isSearched , setIsSearched] = useState(false)
  const [jobs ,setJobs] = useState([])
  const [showRecruiterLogin , setShowRecruiterLogin] = useState(false)
  const value = {
    setSearchFilter , searchFilter ,
    isSearched , setIsSearched , jobs , setJobs , showRecruiterLogin , setShowRecruiterLogin
  }
  //function to fetch data from the asset folder
  const fetchJobs = async ()=>{
   setJobs(jobsData)
  }
  useEffect(()=>{
    fetchJobs()
  },[])
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
