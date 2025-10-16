'use client'
import React, { useState } from 'react'
import { Checkbox } from './ui/checkbox'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from './ui/calendar'
import { Button } from './ui/button'
import { format } from 'date-fns'

export default function TodoList() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false)

  // مثال بيانات مهام
  const todos = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    text: `Task number ${i + 1}: Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  }))

  return (
    <>
      <h1 className='text-lg font-medium mb-6'>Todo List</h1>

      {/* ✅ Calendar */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className='w-full justify-start text-left font-normal'>
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>

        <PopoverContent className='p-0 w-auto'>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>

      {/* ✅ Scrollable Task List */}
      <ScrollArea className="h-[400px] w-full rounded-md border border-border mt-4">
        <div className='flex flex-col gap-3 p-4'>
          {todos.map((todo) => (
            <Card key={todo.id} className='p-3'>
              <div className='flex items-start gap-3'>
                <Checkbox id={`todo-${todo.id}`} />
                <label
                  htmlFor={`todo-${todo.id}`}
                  className='text-sm leading-snug cursor-pointer select-none text-muted-foreground hover:text-foreground'
                >
                  {todo.text}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </>
  )
}
