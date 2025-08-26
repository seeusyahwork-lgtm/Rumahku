import React from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

export const AkunToggle = () => {
    return (
        // Wadahnya akunToggle
        <div className='border-b mb-4 mt-2 pb-4 border-stone-300'>
            {/* avatar akunToggle  */}
            <button className='flex p-0.5 hover:bg-stone-300 hover:text-black rounded transition-colors relative gap-2 w-full items-center'>
                <img src='https://api.dicebear.com/9.x/croodles/svg?seed=Brian' alt='avatar' className='size-8 round shrink-0 bg-teal-600 shadow'></img>

                <div className='text-start'>
                    <span className='text-sm font-semibold block'>
                        Bpk. Suparno.SH
                    </span>
                    <span className='text-sm font-bold block text-stone-400'>Suparno@gmail.com </span>
                </div>
                <FiChevronDown className='absolute right-2 top-1/2 translate-y-[calc(-50%+15px)] text-xs' />
                <FiChevronUp className='absolute right-2 top-1/2 translate-y-[calc(-50-5px)] text-xs' />
            </button>


        </div>


    )
}
