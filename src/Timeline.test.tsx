jest.mock('./api')

import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import Timeline from './Timeline'
import BookList from './BookList'

describe('<Timeline>', () => {

  test('should return <h2> element', async () => {
    await act(async () => {
      const wrapper = mount(<Timeline />)
      expect(wrapper.find('.page__title').text()).toBe('タイムライン')
    })
  })

  test('should return <ul> element', async () => {
    await act(async () => {
      const wrapper = mount(<Timeline />)
      expect(wrapper.find(BookList).length).toBe(1)
    })
  })
})
