import React from 'react'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {

    const navigate = useNavigate();

  return (
    <div className='homepage'>
        <div className='homepage-container'>
            <div className='heading'>
                Welcome to GameLearn !
            </div>
            <div className='sub-txt'>
                A place created specially to Learn while Playing.
            </div>
            <div className='home-play-btn' onClick={()=>{ navigate('/level1') }}>
                <i class="fa-solid fa-play"></i>
            </div>
        </div>
    </div>
  )
}

export default Homepage