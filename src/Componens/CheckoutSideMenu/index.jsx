import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShooppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShooppingCartContext)
  
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)

    }  

    const handleCheckout = (id) => {
        const orderToAdd = {
            date: '2.02.24',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }

    return (
        <aside className= {`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col border border-black rounded bg-white p-6  `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div className='cursor-pointer' 
                onClick={context.closeCheckoutSideMenu}>
                <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
            context.cartProducts.map(product => (
                <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imagesUrl={product.images}
                price={product.price}
                handleDelete={handleDelete}
                />
            ))
            }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className=' font-light text-xl mb-4'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                <button className='w-full py-3 text-white bg-black rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}
 
export default CheckoutSideMenu