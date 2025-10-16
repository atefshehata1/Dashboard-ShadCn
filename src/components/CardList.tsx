import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'
const popularContent = [
  {
    id: 1,
    title: "AI Video Generator",
    badge: "AI",
    image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1500,
  },
  {
    id: 2,
    title: "Image Generation with AI",
    badge: "AI",
    image: "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
  },
  {
    id: 3,
    title: "Chatbot Builder",
    badge: "Automation",
    image: "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 980,
  },
  {
    id: 4,
    title: "Data Visualization Tool",
    badge: "Analytics",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1100,
  },
  {
    id: 5,
    title: "3D Model Generator",
    badge: "3D",
    image: "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 875,
  }
]

const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Jane Smith",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 950,
  },
  {
    id: 3,
    title: "New Plan Purchase",
    badge: "Michael Lee",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 780,
  },
  {
    id: 4,
    title: "Upgrade Plan",
    badge: "Sarah Connor",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 670,
  },
  {
    id: 5,
    title: "Annual Billing",
    badge: "Chris Evans",
    image: "https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1000,
  }
]


export default function CardList({title}:{title:string}) {

  const list = title === "popular Content" ? popularContent : latestTransactions
return (
  <>
    <div>
      <h1 className="text-lg font-medium mb-5">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-3 p-3 bg-card hover:bg-muted/70 transition-all duration-200 border border-border rounded-xl"
          >
            {/* الصورة */}
            <div className="w-12 h-12 rounded-md relative overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* المحتوى (العنوان + البادج) */}
            <div className="flex flex-col flex-1 min-w-0">
              <CardTitle className="text-sm font-medium truncate">
                {item.title}
              </CardTitle>
              <Badge
                variant="secondary"
                className="text-[11px] w-fit text-muted-foreground mt-1"
              >
                {item.badge}
              </Badge>
            </div>

            {/* العدّاد */}
            <CardFooter className="text-sm font-semibold text-muted-foreground  p-0">
              {(item.count / 1000).toFixed(1)}K
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </>
);

}
 