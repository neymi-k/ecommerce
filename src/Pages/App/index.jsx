import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShooppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Componens/Navbar' 
import CheckoutSideMenu from '../../Componens/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/clothes', element: <Home />},
    {path: '/electronics', element: <Home />},
    {path: '/furnitures', element: <Home />},
    {path: '/toys', element: <Home />},
    {path: '/others', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />},
  ])

  return routes
}
const App = () => {
  return (
    <ShooppingCartProvider>
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
      <CheckoutSideMenu /> 
    </BrowserRouter>
    </ShooppingCartProvider>
  )
}

export default App
