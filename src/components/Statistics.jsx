import React from 'react';
import chart from '../assets/Group82.png';
import map from '../assets/ng1.png'
import DonutChart from 'react-donut-chart';
import {BsGenderMale,BsGenderFemale} from 'react-icons/bs';

const Statistics = () => {
    const colors = ['#449352', '#e30325'];
    const data = [{label: 'Accepted Votes', value: 160512222},
    {label: 'Rejected Votes', value: 8400000}]

  return (
    <div className='bg-[#1b1f30] rounded border-[1px] border-[#272935] my-8 flex flex-col gap-2 md:grid md:grid-cols-2 lg:flex lg:flex-row justify-around py-8 md:px-5'>
        <div>
            <img src={chart} alt="chart" />
            <DonutChart
                colors={colors} data={data} className='hidden'
            />
        </div>
        <div className='bg-[#1b1f30] rounded border-[1px] border-[#272935] py-5 px-6 flex flex-col gap-3'>
            <h2 className='text-sm'>CANDIDATES BY GEOPOLITICAL ZONES</h2>
            <div className='flex gap-3'>
                <img className='w-[60%]' src={map} alt="map" />
                <div className='flex flex-col gap-2 mt-auto'>
                    <div className='geopolitical'>
                        <span className='bg-[#449352] h-3 w-5'></span>
                        <p>North East</p>
                        <p className='opacity-50 ml-auto'>3,000</p>
                    </div>
                    <div className='geopolitical'>
                        <span className='bg-[#6d769d] h-3 w-5'></span>
                        <p>North West</p>
                        <p className='opacity-50 ml-auto'>3,000</p>
                    </div>
                    <div className='geopolitical'>
                        <span className='bg-[#a163be] h-3 w-5'></span>
                        <p>North Central</p>
                        <p className='opacity-50 ml-auto'>3,000</p>
                    </div>
                    <div className='geopolitical'>
                        <span className='bg-[#e30325] h-3 w-5'></span>
                        <p>South West</p>
                        <p className='opacity-50 ml-auto'>3,000</p>
                    </div>
                    <div className='geopolitical'>
                        <span className='bg-[#2249d1] h-3 w-5'></span>
                        <p>South South</p>
                        <p className='opacity-50 ml-auto'>3,000</p>
                    </div>
                    <div className='geopolitical'>
                        <span className='bg-[#018796] h-3 w-5'></span>
                        <p>South East</p>
                        <p className='opacity-50 ml-auto'>3,000</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#1b1f30] rounded border-[1px] border-[#272935] flex flex-row lg:flex-col gap-5 py-5 px-6'>
            <div>
                <p className='opacity-50 text-sm'>TOTAL ELECTED MEMBERS</p>
                <h2>10,000</h2>
            </div>
            <div>
                <p className='flex items-center opacity-70 text-xs gap-1'>MALE <BsGenderMale className='text-[#e5b805]' /></p>
                <p>9,000</p>
            </div>
            <div>
                <p className='flex items-center opacity-70 text-xs gap-1'>FEMALE <BsGenderFemale className='text-[#e5b805]' /></p>
                <p>1,000</p>
            </div>
        </div>

    </div>
  )
}

export default Statistics