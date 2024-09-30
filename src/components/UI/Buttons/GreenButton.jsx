import React from 'react'
import clsx from 'clsx'

const GreenButton = ({ label, className, onClick }) => {
  return (
    <button
      className={clsx(
        'w-full max-w-[163px] rounded-full border-2 border-green py-[14px] font-inter text-[16px] font-bold leading-[20.8px] text-green transition-all duration-300',
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default GreenButton
