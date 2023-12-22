import { createBrowserRouter } from 'react-router-dom'
import { LandingPage } from '../screens/landing'
import { MainPage } from '../screens/main'
import { Layout } from './component/layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/main',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/main/dashboard',
        element: <MainPage />
      },
      {
        path: '/main/swap',
        element: <>Swap</>
      },
      {
        path: '/main/markets',
        element: <>Markets</>
      }
    ],
  },
])

export default router
