import React, { useState } from 'react'
import About from './About'
import ProjectView from './ProjectView'
import { projects } from './data.js'

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
    <div className='container py-16 lg:py-24 xl:py-28 box-border flex justify-start items-center h-full text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg'>
      <div className='mx-8 max-w-lg flex-third'>
        <About />
      </div>
      <div className='px-8 box-border overflow-auto h-full space-y-4 invisible hidden sm:visible sm:flex flex-col'>
        <div className='w-32 h-10 font-semibold py-1 text-center align-text-bottom cursor-pointer bg-teal-500 rounded-md text-white hover:bg-teal-600 select-none' 
          onClick={toggleMinimize}
          onKeyDown={keyDownMinimize}>{minimized ? 'Expand' : 'Minimize'} all</div>
        <ProjectView data={projects} isMinimized={minimized} />
      </div>
    </div>
  );
}

export default Home;