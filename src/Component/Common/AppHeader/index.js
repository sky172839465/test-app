import React from 'react'

const AppHeader = ({ name, link }) => {
  return (
    <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href={link}>
          {name}
        </a>
      </div>
    </nav>
  )
}

export default AppHeader
