import React from 'react'
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute({ children, redirectTo }) {
  const user = localStorage.getItem('codeburguer:userData')

  return user ? children : <Navigate to={redirectTo} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  redirectTo: PropTypes.string
}
