import React, {useRef, useContext} from 'react'
import GlobalContext from '../store/GlobalContext'

const Body = () => {

    let {state, dispatch} = useContext(GlobalContext)
    let nameRef = useRef()

    const submitHandler = (evt) => {
        evt.preventDefault()
        let name = (nameRef.current.value)
        dispatch({type : "ADD_NAME", name : name})
    }
    console.log(state)
  return (
    <main>
        <form onSubmit={submitHandler}>
            <input  ref={nameRef} type="text" />
            <button >add person!</button>
        </form>
    </main>
  )
}

export default Body