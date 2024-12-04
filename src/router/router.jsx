import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Terms from '../pages/Terms'
import Privacy from '../pages/Privacy'

function RouteHandler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/terms" element={<Terms />} exact />
      <Route path="/privacy" element={<Privacy />} exact />
    </Routes>
  )
}

export default RouteHandler