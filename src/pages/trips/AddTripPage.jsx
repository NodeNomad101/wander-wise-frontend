import React from 'react'
import TripForm from '../../components/trips/TripForm'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const AddTripPage = () => {
  return (
    <section>
      <Card className="w-2/5 mx-auto my-8">
        <CardHeader>
          <CardTitle>Add your trip</CardTitle>
          <CardDescription>Fill information of your Trip</CardDescription>
        <CardAction>Card Action</CardAction>
       </CardHeader>
      <CardContent>
       <TripForm />
      </CardContent>
    
    </Card>
      

    </section>
   
  )
}

export default AddTripPage
