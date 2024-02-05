import { CalendarIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/solid'


const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props
    let renderXMarkIcon 
    const currentDate = () => {
        const date = new Date().toLocaleDateString();
        return date
     }
    
    return( 
        <div className='flex justify-between items-center border border-black p-4 w-80 rounded-lg mb-4'>
            <div className='w-full'>  
                <div className='flex justify-between '>
                    <p className='flex flex-col'>
                        <span className='flex gap-2'> <CalendarIcon  className='h-6 w-6 text-black'/> { currentDate()}</span>
                        <span className='flex gap-2'> <ShoppingBagIcon  className='h-6 w-6 text-black' />{totalProducts} {totalProducts === 1? 'article': 'articles'}</span>
                    </p>
                    <span className='flex gap-2 items-center text-2xl font-medium'>${totalPrice} <ChevronRightIcon className='h-6 w-6 text-black' /></span>
                </div>
            </div>
          
        </div>
    )
}

export default  OrdersCard 