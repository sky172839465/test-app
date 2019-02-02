import React from 'react'
import { shallow } from 'enzyme'
import AppLoading from '../../../../../Component/Common/AppLoading'

const props = {
}

describe('/Component/Common/AppLoading', () => {
  const wrapper = shallow(<AppLoading {...props} />)
  it('test loading content', () => {
    expect(wrapper.text()).toEqual('loading')
  })
})
