import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Member = () => {

  const navigate = useNavigate('/')
  const goHome = () => {
    navigate('/')
  }
  const goMember = () => {
    navigate('/')
  }
  return (
    <div>
      <h1>Member Page</h1>
      <button onClick={goHome}>Home으로 이동</button>
      <button onClick={goMember}>Member로 이동</button>
    </div>
  )
}

export default Member