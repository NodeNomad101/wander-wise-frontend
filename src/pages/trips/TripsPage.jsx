import { Plus } from 'lucide-react'
import { Button } from '../../components/ui/button'
import React from 'react'

const TripsPage = () => {
  return (
    <section className='py-6 px-20'>
     <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Your Trips</h1>

        <Button>
            <Plus />
            Add Trip
        </Button>
     </div>

    </section>
   
  )
}

export default TripsPage
