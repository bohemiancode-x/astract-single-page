import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {HiOutlineFilter} from 'react-icons/hi';

const FilterBar = () => {

  return (
    <div className='w-full px-5 mt-3'>
        <div className='flex items-center gap-2'>
          <h1 className=' text-xl md:text-2xl font-semibold'>Post Election Data</h1>
          <span className='text-xs md:text-sm bg-[#181c2e] p-1'>PRESIDENTIAL / 2023</span>
        </div>
        <div className='md:flex mt-5 justify-between w-full'>
            <div className='flex justify-between items-center px-2 py-3 my-2 text-[#e5b805] border-[1px] border-[#e5b805] rounded md:hidden'>
                <p className='opacity-50'>3 filters applied</p>
                <HiOutlineFilter />
            </div>
            <h2 className='text-base md:text-xl font-medium'>Presidential Race</h2>

            <div className='hidden md:flex w-[60%] justify-around'>
                <div className='filter-item'>
                    <span>Election Data</span>
                    <IoIosArrowDown />
                </div>
                <div className='filter-item'>
                    <span>Presidential</span>
                    <IoIosArrowDown />
                </div>
                <div className='filter-item'>
                    <span>2023</span>
                    <IoIosArrowDown />
                </div>
            </div>
           
        </div>
      </div>
  )
}

export default FilterBar