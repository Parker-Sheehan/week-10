import React from 'react'
import style from './Modal.module.css'

const Modal = (props) => {
  return (
    <div className={style.middle}>
        {props.children}
    </div>
  )
}

export default Modal