import React from 'react'

const Prac = () => {
    const skills = ['html',"css","js","react"]
  return (
    <div>
        <ul>
            {skills.map((skill,idx)=>{
              return ( <li>
                <p>{skill}</p>
                <p>{idx}</p>
              </li>)
            })}
        </ul>
    </div>
  )
}

export default Prac