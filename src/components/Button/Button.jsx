import React from 'react'

function Button({children, version = 'primary', type, isDisabled = false}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

export default Button