import React from 'react'
import { shallow } from 'enzyme'
import AppLoading from '../../../../component/Common/AppLoading'

const props = {
}

describe('/component/Common/AppLoading', () => {
  const wrapper = shallow(<AppLoading {...props} />)
  it('test loading content', () => {
    expect(wrapper.text()).toEqual('loading')
  })
})
