import React from 'react'
import Cards from './components/Cards'
import "./App.css"

const App = () => {

const jobs = [
  {
    logo: "https://example.com/logos/google.png",
    companyName: "Google",
    daysApplied: 2,
    post: "Frontend Developer",
    jobType: "Full Time",
    level: "Junior",
    perHourCost: 35,
    location: "Bangalore, India"
  },
  {
    logo: "https://example.com/logos/microsoft.png",
    companyName: "Microsoft",
    daysApplied: 5,
    post: "Backend Engineer",
    jobType: "Part Time",
    level: "Senior",
    perHourCost: 55,
    location: "Hyderabad, India"
  },
  {
    logo: "https://example.com/logos/amazon.png",
    companyName: "Amazon",
    daysApplied: 1,
    post: "Cloud Support Associate",
    jobType: "Full Time",
    level: "Junior",
    perHourCost: 30,
    location: "Chennai, India"
  },
  {
    logo: "https://example.com/logos/tesla.png",
    companyName: "Tesla",
    daysApplied: 7,
    post: "AI Research Intern",
    jobType: "Part Time",
    level: "Junior",
    perHourCost: 20,
    location: "Remote"
  },
  {
    logo: "https://example.com/logos/ibm.png",
    companyName: "IBM",
    daysApplied: 9,
    post: "System Analyst",
    jobType: "Full Time",
    level: "Senior",
    perHourCost: 45,
    location: "Pune, India"
  },
  {
    logo: "https://example.com/logos/intel.png",
    companyName: "Intel",
    daysApplied: 12,
    post: "Embedded Engineer",
    jobType: "Full Time",
    level: "Junior",
    perHourCost: 33,
    location: "Noida, India"
  },
  {
    logo: "https://example.com/logos/meta.png",
    companyName: "Meta",
    daysApplied: 4,
    post: "UI/UX Designer",
    jobType: "Part Time",
    level: "Senior",
    perHourCost: 50,
    location: "Gurgaon, India"
  },
  {
    logo: "https://example.com/logos/apple.png",
    companyName: "Apple",
    daysApplied: 3,
    post: "iOS Developer",
    jobType: "Full Time",
    level: "Senior",
    perHourCost: 60,
    location: "Mumbai, India"
  },
  {
    logo: "https://example.com/logos/samsung.png",
    companyName: "Samsung",
    daysApplied: 11,
    post: "QA Engineer",
    jobType: "Full Time",
    level: "Junior",
    perHourCost: 28,
    location: "Delhi, India"
  },
  {
    logo: "https://example.com/logos/zoho.png",
    companyName: "Zoho",
    daysApplied: 6,
    post: "Software Developer",
    jobType: "Part Time",
    level: "Junior",
    perHourCost: 22,
    location: "Coimbatore, India"
  }
];

 return (
    <div className='home'>
  
      {jobs.map(function(elem){

        return <Cards company = {elem.companyName}  location = {elem.location} Cost = {elem.perHourCost} level = {elem.level} jobType = {elem.jobType} daysApplied = {elem.daysApplied} post = {elem.post} logo = {elem.logo} />

      })}
      
      
    </div>
  )
}


export default App
