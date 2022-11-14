import React from 'react'

const Button = (props) => {

    const handleClick = () => {
        props.reset()
    }
  return (
    <>
    <button className="button" onClick={handleClick}>Reset Game</button>
    </>
  )
}

export default Button