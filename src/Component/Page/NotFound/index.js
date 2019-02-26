import React from 'react'

const NotFound = ({ message = 'Oops! Not found page.' }) => {
  return (
    <div
      data-role='not-found'
      className='is-size-3 has-text-centered'
    >
      {message}
    </div>
  )
}

export default NotFound
