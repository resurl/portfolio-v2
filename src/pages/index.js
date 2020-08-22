import React, { useEffect, useState } from "react"
import About from '../About'
import { projects } from '../data'

const Project = (props) => {
  const [expand,setExpand] = useState(false);
  const projectType = (props.type === 'gh') ? 'Github' : 'Devpost';

  function toggleExpand() {
    setExpand(!expand)
  }

  return (
    <div className='overflow-hidden cursor-pointer' onClick={toggleExpand}>
      <div class='flex justify-between'>
        <h1 class='font-semibold'>{props.name}</h1> 
      </div>
      <div class={expand ? '' : 'hidden'}>
        <p class='text-sm'>{props.langs}</p>
        <p class='font-thin'>{props.desc}</p>
        <p><a class='lnk' href={props.link} target='_blank' rel='noreferrer'>{projectType}</a></p>
      </div>
    </div>
  )
}

const ProjectView = (props) => { 
  function loadProjects() {
    return props.data.map((obj, idx) => 
      <Project name={obj.name} 
        langs={obj.langs} 
        desc={obj.desc} 
        type={obj.type}
        link={obj.link}
        key={idx}/>
    );
  }

  return (
    <div className='overflow-scroll space-y-4 max-w-full h-full'>
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
    <div className='container py-8 box-border flex justify-start items-center h-full text-xl text-copy'>
      <div className='mx-8 max-w-lg flex-third'>
        <About />
      </div>
      <div className='mx-8 box-border overflow-auto h-full flex flex-col justify-center'>
        <ProjectView data={userData} />
      </div>
    </div>
  );
}

export default Home;