'use client'
import React from 'react'
import { columns, Payment } from './columns'
import { DataTable } from './data-table'


const getData = async (): Promise<Payment[]> => {
  return  [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    username: "John Doe",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    username: "Jane Smith",
  },
  {
    id: "a73fd62a",
    amount: 210,
    status: "success",
    email: "olivia.taylor@example.com",
    username: "Olivia Taylor",
  },
  {
    id: "b48cd91b",
    amount: 95,
    status: "failed",
    email: "michael.lee@example.com",
    username: "Michael Lee",
  },
  {
    id: "c91df04e",
    amount: 150,
    status: "pending",
    email: "emma.brown@example.com",
    username: "Emma Brown",
  },
  {
    id: "d17be84c",
    amount: 340,
    status: "processing",
    email: "liam.johnson@example.com",
    username: "Liam Johnson",
  },
  {
    id: "e55bc73a",
    amount: 180,
    status: "success",
    email: "sophia.green@example.com",
    username: "Sophia Green",
  },
  {
    id: "f31aa09f",
    amount: 275,
    status: "processing",
    email: "noah.wilson@example.com",
    username: "Noah Wilson",
  },
  {
    id: "g93ce22b",
    amount: 130,
    status: "failed",
    email: "ava.martin@example.com",
    username: "Ava Martin",
  },
  {
    id: "h44ae58c",
    amount: 225,
    status: "pending",
    email: "lucas.davis@example.com",
    username: "Lucas Davis",
  },
  {
    id: "i29fe14a",
    amount: 400,
    status: "success",
    email: "mia.anderson@example.com",
    username: "Mia Anderson",
  },
  {
    id: "j85cc67d",
    amount: 155,
    status: "processing",
    email: "ethan.thomas@example.com",
    username: "Ethan Thomas",
  },
  {
    id: "k12ab88e",
    amount: 310,
    status: "failed",
    email: "isabella.jones@example.com",
    username: "Isabella Jones",
  },
  {
    id: "l23dc41b",
    amount: 200,
    status: "success",
    email: "james.white@example.com",
    username: "James White",
  },
  {
    id: "m66ec33a",
    amount: 450,
    status: "pending",
    email: "amelia.clark@example.com",
    username: "Amelia Clark",
  },
  {
    id: "n99fa27d",
    amount: 190,
    status: "success",
    email: "benjamin.harris@example.com",
    username: "Benjamin Harris",
  },
  {
    id: "o75ba90e",
    amount: 365,
    status: "processing",
    email: "ella.roberts@example.com",
    username: "Ella Roberts",
  },
  {
    id: "p19db04c",
    amount: 120,
    status: "failed",
    email: "william.moore@example.com",
    username: "William Moore",
  },
  {
    id: "q82cc53b",
    amount: 290,
    status: "pending",
    email: "harper.taylor@example.com",
    username: "Harper Taylor",
  },
  {
    id: "r54aa28f",
    amount: 310,
    status: "success",
    email: "daniel.martinez@example.com",
    username: "Daniel Martinez",
  },
  {
    id: "s67ed90a",
    amount: 270,
    status: "success",
    email: "scarlett.garcia@example.com",
    username: "Scarlett Garcia",
  },
  {
    id: "t40ff88c",
    amount: 175,
    status: "failed",
    email: "henry.lopez@example.com",
    username: "Henry Lopez",
  },
]
}


export default async function paymentsPage(){

  const data = await getData()
  return (<> 
      <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
        <h1 className='font-semibold'> All Payments </h1>
      </div>
      <div className='p-5'>
        <DataTable columns={columns} data={data} />
      </div>
        
   </>
  )
}





































































// export default  function PaymentsPage() {
//   const [payments, setPayments] = useState<Payment[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getData()
//       setPayments(data)
//       setLoading(false)
//     }
//     fetchData()
//   }, [])

//   if (loading) return <p>Loading payments...</p>

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-semibold mb-4">Payments List</h1>
//       <ul className="space-y-3">
//         {payments.map((item) => (
//           <li
//             key={item.id}
//             className="p-3 border border-border rounded-lg hover:bg-muted/50 transition"
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <h2 className="font-medium">{item.username}</h2>
//                 <p className="text-sm text-muted-foreground">{item.email}</p>
//               </div>
//               <div className="text-right">
//                 <p className="font-semibold">${item.amount}</p>
//                 <span
//                   className={`text-xs px-2 py-1 rounded ${
//                     item.status === "success"
//                       ? "bg-green-100 text-green-700"
//                       : item.status === "pending"
//                       ? "bg-yellow-100 text-yellow-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {item.status}
//                 </span>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
