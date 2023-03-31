import React from 'react'
import styles from './Modal.module.css'

function Modal(props) {
  return (
    <div className='styles.backdrop'>
      <div className='styles.modal'>
        {props.children}
      </div>
    </div>
  )
}

export default Modal