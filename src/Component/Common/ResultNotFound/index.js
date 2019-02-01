import React from 'react'
import clx from 'classnames'

const ResultNotFound = ({className = 'is-primary', onDelete, children}) => (
  <div className={clx('notification', className)}>
    <button className='delete' onClick={onDelete} />
    {children}
  </div>
)

export default ResultNotFound
