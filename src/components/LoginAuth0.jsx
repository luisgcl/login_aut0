import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginAuth0 = () => {
    const {loginWithRedirect} = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()}>Login</button>
  )
}

export default LoginAuth0