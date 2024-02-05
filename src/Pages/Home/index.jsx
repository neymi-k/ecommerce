import {  useContext } from 'react'
import  ProductDetail from '../../Componens/ProductDetail'
import Layout from '../../Componens/Layout'
import Card from '../../Componens/Card'
import { ShooppingCartContext } from '../../Context'

function Home() {
    const context = useContext(ShooppingCartContext)

    const rederView = () => {
            if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Card key={item.id} data={item} />
                )))
            } else {
                return(
                    <div>'We don't have anything </div>
                )}
        }
        return (
        <Layout> 
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'> Exclusive Products </h1>
            </div>
            <input 
            type="text" 
            placeholder='Search a product' 
            className=' rounded-lg border border-black p-4 w-80 mb-4 focus:outline-none'
            onChange={(event) => context.setSearchByTitle(event.target.value)}/>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {rederView()}
           </div>
           <ProductDetail />
        </Layout>
        )}
  

  export default Home