import React, { Suspense, useEffect } from 'react'
import { Navigate, Route, Routes, Switch } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import routes from '../routers'
import { connect } from 'react-redux'

export const AppContent = (props) => {
  const navigate = useNavigate()
  return (
  <div>
      <Suspense>
      <Routes>
      {routes.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            )
          )
        })}
      <Route path="/" element={<Navigate to="dashboard" replace />} />
      </Routes>
      </Suspense>
  </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppContent)