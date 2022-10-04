import React, { FC } from 'react'

const PrimaryButton:FC<{text: string}> = ({ text }) => {
  return (
    <div className='button__container'>
        <div className='primary__button'>
            <button>{text}</button>
        </div>
    </div>
  )
}

export default PrimaryButton