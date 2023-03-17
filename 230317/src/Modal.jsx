import React from 'react'
import { useState, useEffect } from 'react'
import './Modal.css'


const Modal = () => {
  // let [modal, setModal] = useState(ture)
  let [modal, setModal] = useState(false)
  useEffect(() => {
    // setTimeout(() => { setModal(false) }, (2000))
    setTimeout(() => { setModal(true) }, (2000))
  })
  return (
    <div>
      {
        // modal === true ? <h1 className='modal'>2초 후에 사라지는 모달</h1> : null
        modal === true ? <h1 className='modal'>2초 후에 나타나는 모달</h1> : null
      }
    </div>
  )
}

export default Modal