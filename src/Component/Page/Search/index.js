import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import clx from 'classnames'
import _ from 'lodash'
import {API_END_POINT} from '../../../constant'
import SearchArea from './SearchArea'
import RepoCard from './RepoCard'
import ResultNotFound from '../../Common/ResultNotFound'

class Search extends Component {
  constructor () {
    super()
    this.state = {
      userName: '',
      isLoading: false,
      repoList: []
    }
  }

  componentDidMount () {
    const {location} = this.props
    const params = new URLSearchParams(_.get(location, 'search', ''))
    const defaultUserName = params.get('userName') || ''
    this.setState(
      () => ({userName: defaultUserName}),
      () => !_.isEmpty(defaultUserName) && this.submitForm()
    )
  }

  submitForm = (event) => {
    const {history, location} = this.props
    const {userName} = this.state
    if (event) {
      event.preventDefault()
      history.push({
        pathname: _.get(location, 'pathname', ''),
        search: `?${_.toString(new URLSearchParams({userName}))}`
      })
    }
    this.setState({
      isLoading: true,
      message: '',
      repoList: []
    })

    fetch(`${API_END_POINT}/users/${userName}/repos`)
      .then(resp => resp.json())
      .then(data => {
        const message = _.get(data, 'message', _.isEmpty(data) ? 'No Found' : '')
        const repoList = _.isEmpty(message) ? data : []
        this.setState({
          repoList,
          message,
          isLoading: false
        })
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          message: _.get(error, 'message', '')
        })
      })
  }

  onUserNameChange = e => this.setState({userName: e.target.value})

  render () {
    const {
      userName,
      isLoading,
      repoList,
      message
    } = this.state
    const isEmptyUserName = _.isEmpty(userName)
    const searchAreaProps = {
      userName,
      isEmptyUserName,
      isLoading,
      onSubmitForm: this.submitForm,
      onUserNameChange: this.onUserNameChange
    }
    const repoCardProps = {
    }
    const resultNotFoundProps = {
      className: '',
      onDelete: () => this.setState({message: ''})
    }
    return (
      <React.Fragment>
        <SearchArea {...searchAreaProps} />
        <div className='m-t-20'>
          {
            _.isEmpty(message)
              ? (
                <div className='columns is-multiline'>
                  {repoList.map((repo, index) => (
                    <div
                      key={index}
                      className={clx(
                        'column',
                        'is-full-mobile',
                        'is-half-tablet',
                        'is-one-third-desktop',
                        'is-one-quarter-widescreen'
                      )}>
                      <RepoCard repo={repo} {...repoCardProps} />
                    </div>
                  ))}
                </div>
              )
              : <ResultNotFound {...resultNotFoundProps}>{message}</ResultNotFound>
          }
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Search)
