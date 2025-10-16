'use client'

import React from 'react'
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50),

  email: z
    .string()
    .email({ message: "Invalid email address!" }),

  phone: z
    .string()
    .min(11, { message: "Phone number must be at least 11 digits." })
    .max(15, { message: "Phone number too long." }),

  location: z
    .string()
    .min(2, { message: "Location must be at least 2 characters." }),

  role: z
    .enum(["admin", "user"], { message: "Role must be either admin or user." }),
})

export default function EditUser() {
  // 1. Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "John Doe",
      email: "John Doe@gmail.com",
      phone: "+1 234 5678",
      location: "NewYork , NY",
      role: "admin",
    },
  }) 

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className='mb-4'> Edit User </SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
      <form  className="space-y-8">
        {/* USER NAME  */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormDescription>
                This is your public User name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            {/* email  */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormDescription>
                can you see email Admin only.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            {/* phone  */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>phone</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormDescription>
                This is your public phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            {/* location  */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>location</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormDescription>
                This is your public Location.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            {/* role  */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="admin">admin</SelectItem>
                        <SelectItem value="user">user</SelectItem>
                    
                    </SelectContent>
                    </Select>
               
              </FormControl>
              <FormDescription>
                Only Verified User can be admin.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  )
}
