import React from 'react'
import Banner from '../UI/Banner'
import PricingData from '../pricing&Packages/pricingData'



const Pricing = () => {
  return (
    <div className='mt-52 py-40 '>
     <div>
     <Banner title={"Choose The Right Plan"} />
    
    <div className='lg:mt-40'>
    <PricingData />
    </div>
     </div>
     
     
    </div>
  )
}

export default Pricing