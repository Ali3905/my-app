import React from 'react'
import HomeLeft from './components/Home/homeLeft'
import HomeRight from './components/Home/homeRight'

const home = () => {
  return (
    <div className='bg-white'
    style={{
      "display": 'grid',
      "grid-template-columns": "3fr 1fr"
    }}>
      <HomeLeft />
      <HomeRight />
    </div>
  )
}

export default home
