import React from 'react'

const ResultCard = ({image, name, party, votes, percentage, classN}) => {
  return (
        <span className={classN}>
            <img className='h-10 w-full md:w-9' src={image} alt="" />
            <div>
                <h2 className='text-[#0aa83f] font-medium text-xs md:text-sm'>{name}, {party}</h2>
                <p className='text-[#777] text-xs md:text-sm w-full flex flex-col md:flex-row'>{votes.toLocaleString()} votes <span className='px-1'>({percentage})</span></p>
            </div>
        </span>
  )
}

export default ResultCard