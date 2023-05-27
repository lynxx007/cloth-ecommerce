

import React from 'react'


import DirectoryItem from '../directory-item/directory-item.component'
import { CategoriesContainer } from './category-source.styles'

export const CategorySource = (props) => {
  const { source } = props
  return (
    <CategoriesContainer>
      {source.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  )
}
export default CategorySource
