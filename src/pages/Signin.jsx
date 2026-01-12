import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link, useNavigate } from "react-router-dom" // Uncomment if using React Router

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginUser } from "../api/auth"
import useAuth from "../hooks/useAuth"
import { toast } from "sonner"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }).min(1, {
    message: "Email is required.",
  }),

  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }).max(20, {
    message: "Password must be no more than 20 characters.",
  }),
})

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

 const onSubmit = async (data) => {
    console.log(data);
    try{
      // Perform login logic here, e.g., send data to backend
      const response = await loginUser(data); // Placeholder function
      console.log("Login successful:", response);
      if (response.token) {
        login(response.user, response.token);
        navigate("/dashboard"); // Redirect to dashboard after successful registration
      }else{
        toast.error("Signin failed");
      }
    } catch (error) {
      console.error("Signin failed:", error);
      toast.error("Signin failed. Please try again.");
    }
  }

  return (
    <section className="h-dvh flex items-center justify-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-80 mx-auto mt-20">

    <Card className="w-100">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="*********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full" type="submit">
          Login
        </Button>
        <p className="text-xs text-gray-500">Don't have an account? <a href="/register"
        className="text-blue-700 underline">Register.</a></p> 
      </CardFooter>
     </Card>
    </form>
    </Form>
    </section>
  )
}