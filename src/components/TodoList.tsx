'use client'
import React, { useState } from 'react'
import { Checkbox } from './ui/checkbox'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from './ui/calendar'
import { Button } from './ui/button'
import {format} from 'date-fns'

export default function TodoList() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [open , setOpen] = useState(false)
  return (<>
  <h1 className='text-lg font-medium mb-6'> Todo List </h1>

  {/* Calender */}
  <Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button className='w-full'>
    <CalendarIcon/>
    {date ? format(date, "ppp"): <span> pick a date </span>}
    </Button>
    </PopoverTrigger>
  <PopoverContent className='p-0 w-auto'>
   <Calendar
    mode="single"
    selected={date}
    onSelect={(date)=>{
      setDate(date)
      setOpen(false)
    }}
  />
    </PopoverContent>
</Popover>
  {/* list */}
  <ScrollArea className="h-[500px] w-[350px] rounded-md  p-4 my-4 overflow-y-auto">
    <div className='flex flex-col gap-4 '>

      <Card className='p-4'>
          <div className='flex items-center  justify-between gap-4 p-4'>
          <Checkbox    id='ITEM'/>
          <label id='ITEM'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
          </div>
      </Card>
      <Card className='p-4'>
          <div className='flex items-center  justify-between gap-4 p-4'>
          <Checkbox    id='ITEM'/>
          <label id='ITEM'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
          </div>
      </Card>
      <Card className='p-4'>
          <div className='flex items-center  justify-between gap-4 p-4'>
          <Checkbox    id='ITEM'/>
          <label id='ITEM'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
          </div>
      </Card>
      <Card className='p-4'>
          <div className='flex items-center  justify-between gap-4 p-4'>
          <Checkbox    id='ITEM'/>
          <label id='ITEM'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
          </div>
      </Card>
      <Card className='p-4'>
          <div className='flex items-center  justify-between gap-4 p-4'>
          <Checkbox    id='ITEM'/>
          <label id='ITEM'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
          </div>
      </Card>
      <Card className='p-4'>
          <div className='flex items-center  justify-between gap-4 p-4'>
          <Checkbox    id='ITEM'/>
          <label id='ITEM'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
          </div>
      </Card>
      <Card className='p-4'>
          <div className='flex items-center  justify-between gap-4 p-4'>
          <Checkbox    id='ITEM'/>
          <label id='ITEM'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
          </div>
      </Card>
  
  </div>


  </ScrollArea>
    </>
  )
}
