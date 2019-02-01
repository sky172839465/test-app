import React from 'react'
import { shallow } from 'enzyme'
import ResultNotFound from '../../../../../component/Common/ResultNotFound/index'

const props = {
  className: 'testClassName',
  onDelete: jest.fn(),
  children: 'result not found'
}

describe('/component/Common/ResultNotFound', () => {
  const wrapper = shallow(<ResultNotFound {...props} />)
  it('test not found message content', () => {
    const message = wrapper.find(`[className*="${props.className}"]`)
    const closeMsgBtn = wrapper.find('button[className="delete"]')
    closeMsgBtn.simulate('click')
    expect(message).toHaveLength(1)
    expect(message.text()).toEqual(props.children)
    expect(props.onDelete).toHaveBeenCalled()
  })
})
