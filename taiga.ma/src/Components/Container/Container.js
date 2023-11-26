import React from 'react'
import Nav from './Nav/Nav'
import LeftNav from './LeftNav/LeftNav'

const Container = () => {
  return (
    <div style={{height : "100vh"}} className='container ps-4 pe-4'>
        <Nav/>
        <LeftNav/>
    </div>
  )
}

export default Container