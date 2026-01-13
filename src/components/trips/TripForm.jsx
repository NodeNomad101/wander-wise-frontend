
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Plus } from "lucide-react"


const budgetSchema = z.object({
    total: z.number(),
    spent: z.number().default(0)
})

const tripSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
  startDate: z.date(),
  endDate: z.date(),
  destination: z.array(
    z.string().min(2,{message:"Must be alteast two characters"})
  ).min(1,{message: "Choose atleast one destination"}),
  budget: budgetSchema,
}).refine(
    (data) => data.startDate < data.endDate,
    {
        message: "End date must be after start date",
        path:["endDate", "startDate"]
    }
)

export default function TripForm(tripInfo) {
  // ...

   const form = useForm({
      resolver: zodResolver(tripSchema),
      defaultValues: tripInfo || {
        title: "",
        description: "",
        startDate: new Date(),
        endDate: new Date(),
        destination: [],
        budget: {
            total: 0,
            spent: 0,
        }
      },
    });

    const { fields: destinationFields, append: addDestination,  remove: removeDestination } = useFieldArray({
    control : form.control,
    name: "destinations", 
  });


    const onAdd = (data) => {
        console.log(data);
    }

    const onEdit = (data) => {
        console.log(data);
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(tripInfo? onEdit : onAdd)} 
      className="space-y-8">

        <Card>
          <CardHeader>
            <CardTitle>Trip Detals</CardTitle>
            <CardDescription>
              Fill details about the trip
            </CardDescription>
          </CardHeader>
          <CardContent className={"space-y-4"}>


          <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trip Title</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Date</FormLabel>
              <FormControl>
                <Input type={"date"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trip Destinations</CardTitle>
            <CardDescription>Enter the places you want to visit.
            </CardDescription>
            <CardAction>
              <Button 
              type="button" 
              variant="outline" 
              onClick={()=>{addDestination("")}}
              >
              <Plus/>
              Add
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className={"space-y-4"}>
            {
              destinationFields.map((field, index) => {
                return (
                  <div key={index} >
                        <FormField
                          control={form.control}
                          name={`destinations.${index}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description {index +1}</FormLabel>
                              <FormControl>
                                <Input placeholder="Eiffel Tower" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                  </div>
                )
              })
            }


          </CardContent>
        </Card>

        

      
        
        <Button type="submit">{tripInfo? "Edit Trip" : "Add Trip"}
        </Button>
      </form>
    </Form>
  )
}