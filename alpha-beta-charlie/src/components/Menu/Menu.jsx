import React from 'react'
import Modal from '../UI/Modal'
import GlobalContext from '../store/GlobalContext'
import { useContext } from 'react'

const Menu = () => {

    let {state, dispatch} = useContext(GlobalContext)
    
  return (
    <Modal>
        <ul>
            <h2>These are names!</h2>
        </ul>
    </Modal>
  )
}

export default Menu