import React from 'react'

import Krist from './../../assets/Krist.svg';

function Logo({className}) {
  return (
    <div className={`${className}`}>
        <img src={Krist} alt="" />
    </div>
  )
}

export default Logo