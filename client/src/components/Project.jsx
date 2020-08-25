import React, { useState, useEffect} from 'react'

export default function Project(props) {
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
  