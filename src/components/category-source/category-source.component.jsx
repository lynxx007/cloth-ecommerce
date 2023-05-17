

import React from 'react'

import "../category-source/category-source.styles.scss"
import DirectoryItem from '../directory-item/directory-item.component'

export const CategorySource = (props) => {
  const { source } = props
  return (
    <div className="categories-container">
      {source.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}
export default CategorySource
