import React from 'react'
import { render } from '@testing-library/react'

import SortBox from '../'
import { SORT_BY } from '../../../constants'

describe('SortBox', () => {
  it('will indicate unsorted by default', () => {
    const { getByText } = render(<SortBox />)
    getByText('Unsorted')
  })
  it('will indicate sorted by name when sortBy is name', () => {
    const { getByText } = render(<SortBox sortBy={SORT_BY.NAME} />)
    getByText('Sorted by name')
  })
  it('will indicate sorted by name in reverse when sortBy is name reverse', () => {
    const { getByText } = render(<SortBox sortBy={SORT_BY.NAME_REVERSE} />)
    getByText('Sorted by name in reverse')
  })
})
