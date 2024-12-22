import React from 'react'
import Form from './components/form'


function ForgotPassword() {
  return (
    <div onLoad={document.title = "Forgot Password"}>
       <div>
        <Form/>
       </div>
    </div>
  )
}

export default ForgotPassword