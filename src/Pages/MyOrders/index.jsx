import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../Componens/Layout"
import OrdersCard from "../../Componens/OrdersCard"
import { ShooppingCartContext } from '../../Context'


function MyOrders() {
 
    const context = useContext(ShooppingCartContext)
    
    return (
        <Layout>
        <div className='flex justify-between'> 
            <h1>My Orders</h1>
        </div>
            {
            context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard 
                    totalPrice={order.totalPrice} 
                    totalProducts={order.totalProducts} />
            </Link>
            ))
            }
           
        </Layout>
        
    )
  }

  export default MyOrders