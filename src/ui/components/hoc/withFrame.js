import React from 'react'

const DEFAULT_STYLE = {
  margin: '1rem',
  border: '1px solid grey',
  padding: '1rem',
}

export const withFrame = customStyle => Enhanced => {
  const WithFrame = props => (
    <div style={{ ...DEFAULT_STYLE, ...customStyle }}>
      <Enhanced {...props} />
    </div>
  )

  return WithFrame
}

// HOCs

// render props
// function as child components
