import React from 'react'

const RepoCard = (props) => {
  const { repo = {} } = props
  const {
    name,
    description,
    html_url: link
  } = repo

  return (
    <div className='card'>
      <div className='card-content'>
        <p className='subtitle'>
          {name}
        </p>
      </div>
      <div data-role='desc' className='card-content'>
        {description}
      </div>
      <footer className='card-footer'>
        <p className='card-footer-item'>
          <span>
            See in <a target='_block' href={link}>Github</a>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default RepoCard
