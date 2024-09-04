import React from 'react'

interface IMyButtonProps {
  text: string;
  onClick?: () => void;
}

const MyButton: React.FC<IMyButtonProps> = (props: IMyButtonProps) => {
  return (
    <>
    <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

export default MyButton;
