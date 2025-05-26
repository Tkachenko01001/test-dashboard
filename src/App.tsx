import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout'
import { Overview } from './pages/Overview'
import { Users } from './pages/Users'
import { Settings } from './pages/Settings'
import { NotFound } from './pages/NotFound'
import { APP_ROUTES } from './constants/routes'

function App() {
  return (
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<Layout />}>
        <Route index element={<Navigate to={APP_ROUTES.OVERVIEW} replace />} />
        <Route path={APP_ROUTES.OVERVIEW} element={<Overview />} />
        <Route path={APP_ROUTES.USERS} element={<Users />} />
        <Route path={APP_ROUTES.SETTINGS} element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
