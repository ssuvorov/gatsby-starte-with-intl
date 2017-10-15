import React from 'react'

export default ({ loading }) => {
  return loading ? <img src={`${__PATH_PREFIX__}/assets/images/spinner.gif`} /> : null
}
