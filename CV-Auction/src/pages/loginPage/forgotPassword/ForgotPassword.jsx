import React from 'react'
import Form from './components/form'


function ForgotPassword() {
  return (
    <div onLoad={document.title = "Forgot Password"}>
        <Form/>
    </div>
  )
}

export default ForgotPassword