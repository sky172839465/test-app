import React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../../../../../component/Page/NotFound/index'

const props = {
  message: 'test not found'
}

describe('/component/Page/NotFound', () => {
  it('test default not found content', () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper.text()).toEqual('Oops! Not found page.')
  })

  it('test custom not found message content', () => {
    const wrapper = shallow(<NotFound {...props} />)
    expect(wrapper.text()).toEqual(props.message)
  })
})
