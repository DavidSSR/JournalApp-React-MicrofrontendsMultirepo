import React from 'react'
import AuthRoutes from './routes/AuthRoutes'
import { AppTheme } from './theme'

const App = () => {
  return (
    <AppTheme>
      <AuthRoutes />
    </AppTheme>
  )
}

export default App
