import React, { useEffect, useState } from "react"
import About from '../About'
import { projects } from '../data'

const Project = (props) => {
  return (
    <div className=''>
      {props.name}
    </div>
  )
}

const ProjectView = (props) => { 
  function loadProjects() {
    return props.data.map((obj, idx) => 
      <Project name={obj.name} langs={obj.langs} desc={obj.desc} key={idx}/>
    );
  }

  return (
    <div className=''>
      {loadProjects()}
    </div>
  )
}



function Home() {
  const [userData, setData] = useState([]);

  useEffect(() => {
    setData(projects)
  }, [])

  return (
    <div className='container flex justify-evenly items-center h-full text-xl'>
      <div className='mx-8 max-w-lg'>
        <About />
      </div>
      <div className='mx-8'>
        <ProjectView data={userData} />
      </div>
    </div>
  );
}

export default Home;