import React from 'react'

const DEFAULT_STYLE = {
  margin: '1rem',
  border: '1px solid grey',
  padding: '1rem',
}

const WithFrame = ({ customStyle, children }) => (
  <div style={{ boxShadow: '1rem 1rem 1rem grey' }}>
    {children({ ...DEFAULT_STYLE, ...customStyle })}
  </div>
)

export default WithFrame
