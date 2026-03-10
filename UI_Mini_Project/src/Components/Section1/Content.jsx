import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex justify-between items-center gap-10 h-[90vh] px-18'>
        <Leftcontent/>
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default Content
