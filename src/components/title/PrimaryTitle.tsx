import React, { FC } from 'react'


const PrimaryTitle: FC<{ text: string | number }> = ({text}) => {
  return (
    <div className="choose_title" data-aos="fade-up">
          <div>
            <h4>{text}</h4>
          </div>
        </div>
  )
}

export default PrimaryTitle