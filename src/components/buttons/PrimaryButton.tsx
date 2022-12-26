import React, { FC } from 'react'

type buttonProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  color?: 'primary' | 'secondary'; // two styling options (you can create as many as you want)
  disabled?: boolean; // make the button disabled or not
}
const PrimaryButton:FC<buttonProps> = ({ text, onClick, children, color, disabled=false }) => {
  return (
    <div className='button__container'>
        <div className='primary__button'>
            <button onClick={onClick} disabled={disabled} >{text}</button>
        </div>
    </div>
  )
}

export default PrimaryButton;