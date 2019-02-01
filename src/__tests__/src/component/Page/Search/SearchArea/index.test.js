import React from 'react'
import { mount, shallow } from 'enzyme'
import SearchArea from './../../../../../../component/Page/Search/SearchArea'

const props = {
  userName: 'testGitHubUser',
  isEmptyUserName: false,
  isLoading: false,
  onSubmitForm: jest.fn(),
  onUserNameChange: jest.fn()
}

describe('/component/Page/Search/SearchArea', () => {
  it('test search area has value content', () => {
    const wrapper = shallow(<SearchArea {...props} />)
    const {
      className,
      value
    } = wrapper.find('input[name="userName"]').props()
    const errorMsg = wrapper.find('p[data-role="error-msg"]')
    expect(className).toContain('is-primary')
    expect(value).toEqual(props.userName)
    expect(errorMsg).toHaveLength(0)
  })

  it('test search area none value content', () => {
    const noneValueProps = {
      ...props,
      userName: '',
      isEmptyUserName: true
    }
    const wrapper = shallow(<SearchArea {...noneValueProps} />)
    const {
      className,
      value
    } = wrapper.find('input[name="userName"]').props()
    const errorMsg = wrapper.find('p[data-role="error-msg"]')
    expect(className).toContain('is-danger')
    expect(value).toEqual(noneValueProps.userName)
    expect(errorMsg).toHaveLength(1)
  })

  it('test submit search form', () => {
    const wrapper = mount(<SearchArea {...props} />)
    const userNameInput = wrapper.find('input[name="userName"]')
    const searchBtn = wrapper.find('button[type="submit"]')
    expect(props.onUserNameChange).not.toHaveBeenCalled()
    expect(props.onSubmitForm).not.toHaveBeenCalled()
    userNameInput.simulate('change', { target: { value: 'changeUserName' } })
    searchBtn.simulate('submit')
    expect(props.onUserNameChange).toHaveBeenCalled()
    expect(props.onSubmitForm).toHaveBeenCalled()
    wrapper.unmount()
  })
})
