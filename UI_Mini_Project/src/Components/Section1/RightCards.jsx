import React from 'react'
import { MoveRight } from 'lucide-react'
const RightCards = (props) => {
    return (
        <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-4xl'>
            <img src={props.img} className='h-full w-full object-cover'></img>
            <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8'>
                <h2 className='bg-white rounded-full p-2 h-12 w-12 flex justify-center items-center text-xxl font-extrabold'>{props.id + 1}</h2>
                <div><p className='text-lg text-shadow-2xs leading-relaxed mb-10 text-white '>{props.intro}</p></div>
                <div className='flex justify-between '><button className='bg-blue-600 text-white text-sm font-medium px-8 py-2 rounded-full'>{props.tag}</button >
                    <button className='bg-blue-600 text-white text-sm font-medium px-2 py-2  rounded-full'><MoveRight /></button></div>

            </div>

        </div>
    )
}

export default RightCards
