import { useContext } from 'react'
import { ShooppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShooppingCartContext)
    // console.log ('PRODUCT TO SHOW: ', context.productToShow)

    return (
        <aside className= {`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail fixed flex-col border border-black rounded bg-white `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className='cursor-pointer' 
                onClick={context.closeProductDetail}>
                <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg'
                 src={context.productToShow.images}
                 alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font medium text-2xl m-b-2'>${context.productToShow.price}</span>
                <span className='font medium text-md'>{context.productToShow.title}</span>
                <span  className='font medium text-sm'> {context.productToShow.description}</span>
            </p>
        </aside>
    )
}
 
export default ProductDetail