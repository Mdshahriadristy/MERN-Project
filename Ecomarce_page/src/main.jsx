import './index.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Root from './Layout/Root'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import Shop from './pages/ShopNow/Shop'
import Singleproductpage from './Components/SharedComponent/Header/Singleproductpage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Blog',
        element: <Blog />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/ShopNow',
        element: <Shop />,
      },
      {
        path: '/ShopNow/:id',
        element: <Singleproductpage />,
      },
    ],
  },
])

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
