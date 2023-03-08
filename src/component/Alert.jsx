import React from 'react'

function Alert(props) {
  return (
            <div>
                <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                  <strong>{props.alert.msg}</strong>:{props.alert.type} 
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
  )
}

export default Alert
