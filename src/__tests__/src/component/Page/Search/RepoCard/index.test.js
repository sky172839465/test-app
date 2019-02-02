import React from 'react'
import { shallow } from 'enzyme'
import RepoCard from '../../../../../../Component/Page/Search/RepoCard'

const props = {
  repo: {
    name: 'test repo',
    description: 'test repo desc',
    html_url: 'https://test.repo.com'
  }
}

describe('/Component/Page/Search/RepoCard', () => {
  const wrapper = shallow(<RepoCard {...props} />)
  it('test repo card content', () => {
    const title = wrapper.find('p[className="subtitle"]').text()
    const desc = wrapper.find('div[data-role="desc"]').text()
    const { href } = wrapper.find('footer[className="card-footer"] a').props()
    const { repo } = props

    expect(title).toEqual(repo.name)
    expect(desc).toEqual(repo.description)
    expect(href).toEqual(repo.html_url)
  })
})
