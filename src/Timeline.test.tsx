jest.mock('./api')

import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import Timeline, { Title } from './Timeline'
import BookList from './BookList'

describe('<Timeline>', () => {

  test('should display page title', async () => {
    await act(async () => {
      const wrapper = mount(<Timeline />)
      expect(wrapper.find(Title).text()).toBe('タイムライン')
    })
  })

  test('should return <ul> element', async () => {
    await act(async () => {
      const wrapper = mount(<Timeline />)
      expect(wrapper.find(BookList).length).toBe(1)
    })
  })
})
