import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {HiOutlineFilter} from 'react-icons/hi';
import { useFetch } from '../hooks/useFetch';
import { ThreeDots } from 'react-loader-spinner';
import ResultCard from '../cards/ResultCard';

const url = "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes";

const shortCut = (name) => {
    let shortForm;

    if (name === `People's Democratic Party`) {
        shortForm ='PDP'
    }
    if (name === 'Labour Party') {
        shortForm = 'LP'
    }
    if (name === 'All Progressive Congress') {
        shortForm = 'APC'
    }

    return shortForm;
}

const FilterBar = () => {
    const { data, isPending, error } = useFetch(url, {type: 'president'});

    const TotalVotes = data ? data[0].candidates_vote + data[1].candidates_vote + data[2].candidates_vote : null;

  return (
    <div className='w-full flex flex-col-reverse px-5 mt-3'>
        <div className='w-full h-[26vh] md:h-[20vh] my-2'>
            <h2 className='font-medium'>PRESIDENT</h2>
            <div className='py-3'>
                {!isPending && data && 
                    <div className='flex relative w-full h-[20px] md:h-[15px]'>
                        <span className='relative bg-Tinubu w-[10%] h-full'>
                            <ResultCard
                                classN={`tooltip absolute flex flex-col md:flex-row gap-1 px-2 py-1 bg-white md:w-[13em] top-7 left-[0%]`}
                                image={`/${data[1].full_name.split(" ").join('')}.png`}
                                name={data[1].full_name}
                                party={shortCut(data[1].political_party_name)}
                                votes={data[1].candidates_vote}
                                percentage={`${(data[1].candidates_vote / TotalVotes * 100).toFixed(1)}%`}
                            />
                        </span>
                        <span className='relative bg-PeterObi w-[80%] h-full'>
                            <ResultCard
                                classN={`tooltip absolute flex flex-col md:flex-row gap-1 px-2 py-1 bg-white md:w-[13em] top-7 right-[50%] md:right-[30%] lg:right-[50%]`}
                                image={`/${data[0].full_name.split(" ").join('')}.png`}
                                name={data[0].full_name}
                                party={shortCut(data[0].political_party_name)}
                                votes={data[0].candidates_vote}
                                percentage={`${(data[0].candidates_vote / TotalVotes * 100).toFixed(1)}%`}
                            />
                        </span>
                        <span className='relative bg-Atiku w-[10%] h-full'>
                            <ResultCard
                                classN={`tooltip absolute flex flex-col md:flex-row gap-1 px-2 py-1 bg-white md:w-[13em] top-7 right-[0%]`}
                                image={`/${data[2].full_name.split(" ").join('')}.png`}
                                name={data[2].full_name}
                                party={shortCut(data[2].political_party_name)}
                                votes={data[2].candidates_vote}
                                right={0}
                                percentage={`${(data[2].candidates_vote / TotalVotes * 100).toFixed(1)}%`}
                            />
                        </span>
                    </div>
                }    
                {/* {!isPending && 
                <div className='flex w-full h-[15px]'>
                {data && data.map((datum) => (
                    <span className={`relative bg-${datum.full_name.split(" ").join('')} ${datum.full_name === 'Peter Obi' ? 'w-[60%]' : 'w-[20%]'} h-full`}>
                        <ResultCard 
                            image={`/${datum.full_name.split(" ").join('')}.png`}
                            name={datum.full_name}
                            party={datum.political_party_name}
                            votes={datum.candidates_vote}
                            right={datum.full_name === 'Peter Obi' ? '50%' : '20%'}  
                        />
                    </span>
                ))}
            </div>
            } */}
            </div>
            {isPending && <div className='flex h-full justify-center items-center'>
                <ThreeDots 
                            height="80" 
                            width="80" 
                            radius="9"
                            color="#fff" 
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                            />
                    </div>
            }
            {error && <span>{error.msg}</span>}
        </div>
        <div>
            <div>
            <div className='flex items-center gap-2'>
            <h1 className=' text-xl md:text-2xl font-semibold'>Post Election Data</h1>
            <span className='text-xs md:text-sm bg-[#181c2e] p-1'>PRESIDENTIAL / 2023</span>
            </div>
            <p className='text-xs md:text-sm'><span className='px-1 text-[#e5b805]'>UPDATED</span>MAR. 15, 2021, 9:43 A.M. EDT</p>
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
      </div>
  )
}

export default FilterBar