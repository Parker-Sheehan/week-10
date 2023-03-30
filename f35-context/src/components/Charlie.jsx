import React, {useState} from 'react'
import Delta from './Delta'
import Modal from './Modal'

const Charlie = () => {
    const [toggole, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggole)
  return (
    <div>
        <h3>Charlie</h3>
        <button onClick={handleClick}>Show Modal</button>
        {toggole && <Modal/>}
        <Delta></Delta>
    </div>
  )
}

export default Charlie