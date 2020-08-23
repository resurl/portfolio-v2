import React, { useEffect, useState } from "react"
import About from '../About'
import { projects as myProjects } from '../data'

const Project = (props) => {
  const [expand, setExpand] = useState(false);
  const projectType = (props.type === 'gh') ? 'Github' : 'Devpost';

  useEffect(() => {
    if (!props.isMini) {
      setExpand(true);
    } else {
      setExpand(false)
    }
  }, [props.isMini])

  function toggleExpand() {
    setExpand(!expand)
  }

  return (
    <div className='overflow-hidden cursor-pointer' onClick={toggleExpand}>
      <div className='flex justify-between'>
        <h1 className='font-semibold'>{props.name}</h1> 
      </div>
      <div className={expand ? '' : 'hidden'}>
        <p className='text-sm'>{props.langs}</p>
        <p className='font-thin'>{props.desc}</p>
        <p><a className='lnk' href={props.link} target='_blank' rel='noreferrer'>{projectType}</a></p>
      </div>
    </div>
  )
}

const ProjectView = (props) => { 
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setProjects(loadProjects(true))
    console.log(props.data);
  },[])

  useEffect(() => {
    if (projects.length > 0 && !loaded)
      setLoaded(true)
    
  },[projects])

  useEffect(() => {
    if (projects && loaded)
      setProjects(loadProjects(props.isMinimized));

  }, [props.isMinimized])

  function loadProjects(mini) {
    let jsx = props.data.map((obj, idx) => 
      <Project name={obj.name} 
        langs={obj.langs} 
        desc={obj.desc} 
        type={obj.type}
        link={obj.link}
        isMini={mini}
        key={idx} />
    );
    console.log(jsx)
    return jsx
  }

  const loadingData = () => {
    let jsx = [];
    for (let i = 0; i < 5; i++)
      jsx.push(<div className='w-64 h-10 bg-gray-500' key={i}></div>)
    return jsx
  }

  return (
    <div className='overflow-scroll space-y-4 max-w-full h-full'>
      {loaded ? projects : loadingData()}
    </div>
  )
}



function Home() {
  const [minimized, setMini] = useState(true);

  function toggleMinimize() {
    setMini(!minimized);
  }

  function keyDownMinimize(e) {
    if (e.key === 'Enter')
      setMini(!minimized)
  }

  return (
    <div className='container antialiased py-20 lg:py-28 xl:py-32 box-border flex justify-start items-center h-full text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg text-copy'>
      <div className='mx-8 max-w-lg flex-third'>
        <About />
      </div>
      <div className='mx-8 box-border overflow-auto h-full space-y-4 flex flex-col justify-center invisible md:visible lg:visible xl:visible'>
        <div className='w-32 h-10 font-semibold py-1 text-center align-text-bottom cursor-pointer bg-teal-500 rounded-md text-white hover:bg-teal-600 select-none' 
          onClick={toggleMinimize}
          onKeyDown={keyDownMinimize}>{minimized ? 'Expand' : 'Minimize'} all</div>
        <ProjectView data={myProjects} isMinimized={minimized} />
      </div>
    </div>
  );
}

export default Home;