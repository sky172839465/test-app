import React from 'react'

const Calculate = props => {
  const {
    price,
    handleChange,
    handleClick
  } = props
  return (
    <div>
      <label htmlFor='price'>Price</label>
      <input id='price' type='number' onChange={handleChange} value={price} />
      <button type='button' onClick={handleClick}>Calculate half price</button>
    </div>
  )
}

export default Calculate
