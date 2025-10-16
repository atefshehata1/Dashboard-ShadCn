import AppLineChart from '@/components/AppLineChart'
import CardList from '@/components/CardList'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import {  BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import React from 'react'

export default function SingleUserPage() {
  return (<>
  {/* Dashboard > users > john doe  */}
    <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">Users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage> John doe</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
    {/* Container  */}
    <div className='flex flex-col gap-8 mt-4 xl:flex-row'>

      {/* LEFT  */}
      <div className='w-full xl:w-1/3  space-y-6'>

      {/* USER BADGE  CONTAINER */}
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <h1 className='text-lg font-semibold'> User Badges </h1>
        <div className='flex gap-4  mt-4'>
          {/* first Icon  */}
          <HoverCard>
          <HoverCardTrigger>
            <BadgeCheck
            size={36}
            className='bg-blue-500/30 border-1 border-blue-500/50 rounded-full p-2 '/>
          </HoverCardTrigger>
          <HoverCardContent>
           <h1 className='font-bold mb-2'> verified User </h1>
           <p className='text-sm text-muted-foreground'> This User has been verified by the Admin</p>
          </HoverCardContent>
        </HoverCard>
          {/* Second Icon  */}
          <HoverCard>
          <HoverCardTrigger>
            <Shield
            size={36}
            className='bg-green-500/30 border-1 border-green-500/50 rounded-full p-2 '/>
          </HoverCardTrigger>
          <HoverCardContent>
           <h1 className='font-bold mb-2'> Admin </h1>
           <p className='text-sm text-muted-foreground'> Admin Users have access to all feature and can manage users</p>
          </HoverCardContent>
        </HoverCard>
          {/* Third Icon  */}
          <HoverCard>
          <HoverCardTrigger>
            <Candy
            size={36}
            className='bg-yellow-500/30 border-1 border-yellow-500/50 rounded-full p-2 '/>
          </HoverCardTrigger>
          <HoverCardContent>
           <h1 className='font-bold mb-2'> Awarded </h1>
           <p className='text-sm text-muted-foreground'> This User has been awarded for Their contribution</p>
          </HoverCardContent>
        </HoverCard>
          {/* foutrh Icon  */}
          <HoverCard>
          <HoverCardTrigger>
            <Citrus
            size={36}
            className='bg-orange-500/30 border-1 border-orange-500/50 rounded-full p-2 '/>
          </HoverCardTrigger>
          <HoverCardContent>
           <h1 className='font-bold mb-2'> Popular </h1>
           <p className='text-sm text-muted-foreground'> This User has been Popular in the community</p>
          </HoverCardContent>
        </HoverCard>

        </div>
      </div>



      {/* INFORMATION CONTAINER  */}
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <div className='flex items-center justify-between'>
         <h1 className='text-lg font-semibold'> User Information </h1>
         <Sheet>
          <SheetTrigger asChild>
            <Button> Edit User </Button>
          </SheetTrigger>
          {/* EDIT USER  */}
          <EditUser/>
        </Sheet>

        </div>

         <div className='space-y-4 mt-4'>
          <div className='flex flex-col gap-2 mb-8'>
            <p className='text-sm text-muted-foreground'> profile completion </p>
            <Progress value={66}/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='font-bold'> User Name : </span>
            <span className=''> John doe</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='font-bold'> gmail : </span>
            <span className=''> John doe @gmail.com </span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='font-bold'> phone : </span>
            <span className=''> +1 234 56789 </span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='font-bold'> Location : </span>
            <span className=''> New York , NY </span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='font-bold'> Role : </span>
            <Badge className=''> Admin  </Badge>
          </div>
          <p className='text-sm text-muted-foreground mt-2'> joined on 2025.01.01 </p>
         </div>
         </div>
      {/* CARD LIST CONTAINER  */}
      <div className='bg-primary-foreground p-4 rounded-lg'> <CardList title='Recent Transactions'/> </div>
      </div>


      {/* RIGHT  */}
      <div className='w-full xl:w-2/3  space-y-6'>
       {/* USER CARD  CONTAINER */}
      <div className='bg-primary-foreground p-4 rounded-lg'> 
        <div className='flex items-center gap-2'>
          <Avatar>
            <AvatarImage src='/Logo.jpg'/>
            <AvatarFallback> JD</AvatarFallback>
          </Avatar>
          <h1 className='text-xl font-semibold'> John doe </h1>
        </div>
          <p className='text-sm text-muted-foreground mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae possimus harum quod corrupti ea. Eius esse adipisci provident fugit libero possimus doloremque neque beatae.</p>
        </div>
      {/* CHART CONTAINER  */}
      <div className='bg-primary-foreground p-4 rounded-lg'> 
        <div>
          <h1 className='text-lg font-semibold my-3'> User Activity </h1>
          <AppLineChart/>
        </div>
         </div>
      </div>
    </div>
    
 </> )
}
