import { Loader } from '@/components/loader'
import { Navigation } from '@/components/navigation'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <div className="min-h-screen bg-gray-950">
        <Navigation>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Navigation>
      </div>
  )
}

export default Layout
