import React from 'react'
import clx from 'classnames'
import styles from './index.module.scss'

const SearchArea = (props) => {
  const {
    userName,
    isEmptyUserName,
    isLoading,
    onSubmitForm,
    onUserNameChange
  } = props

  return (
    <form onSubmit={onSubmitForm}>
      <div className={clx('field is-grouped', styles.searchArea)}>
        <div className='control is-expanded'>
          <input
            type='text'
            name='userName'
            className={clx(
              'input is-fullwidth',
              {'is-primary': !isEmptyUserName},
              {'is-danger': isEmptyUserName}
            )}
            placeholder='Find user'
            onChange={onUserNameChange}
            value={userName}
            readOnly={isLoading}
          />
          {
            isEmptyUserName &&
            <p className='help is-danger'>
              This field is required
            </p>
          }
        </div>
        <div className='control'>
          <button
            type='submit'
            className={clx(
              'button is-primary is-outlined',
              {'is-loading': isLoading}
            )}
            disabled={isEmptyUserName}>
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchArea
