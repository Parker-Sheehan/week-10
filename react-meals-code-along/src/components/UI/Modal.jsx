import React, {Fragment} from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const protalElement = document.getElementById('overlays')

const Modal = (props) => {
    return(
        <Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose}></Backdrop>, protalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, protalElement)}
        </Fragment>
    )
}

export default Modal