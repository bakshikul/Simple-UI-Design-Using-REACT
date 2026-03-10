import React from 'react'
import RightCards from './RightCards'

const Rightcontent = (props) => {
    console.log(props.users)
    return (
        <div id='Right' className='h-full overflow-x-auto rounded-4xl w-2/3 p-6 flex flex-nowrap gap-10 '>
            {props.users.map(function (elem, idx){
                return <RightCards key={idx} id={idx} color={elem.color}img = {elem.img} tag={elem.tag} intro={elem.intro} />
            })}
        </div>
    )
}

export default Rightcontent
