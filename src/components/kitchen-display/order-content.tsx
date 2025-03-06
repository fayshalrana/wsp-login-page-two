import { OrderCard } from "./order-card"
import { Order } from "./types"

const orders: Order[] = [
  {
    id: "202",
    tableNumber: "A101",
    type: "Table",
    status: "Ready All",
    timeStatus: "14:06",
    edited: true,
    editedTime: "1 min ago",
    instruction: "Here is the sample of an order instruction",
    items: [
      {
        name: "Fillet Stack + Mushroom cream Sauce",
        status: "Accepted",
        quantity: 1,
        note: "Onion: A lot",
      },
      {
        name: "Bacon & Egg",
        status: "Accepted",
        quantity: 1,
        note: "Salt: No",
      },
      {
        name: "Fresh Juice",
        status: "Ready",
        quantity: 2,
      },
    ],
  },
  {
    id: "203",
    tableNumber: "B201",
    type: "Table",
    status: "Accept All",
    timeStatus: "13:50",
    items: [
      {
        name: "French Fries",
        status: "Ordered",
        quantity: 3,
        note: "Salt: No",
      },
      {
        name: "Fried Chicken Sandwich",
        status: "Ordered",
        quantity: 1,
        note: "No Ketchup",
      },
      {
        name: "Soda",
        status: "Ordered",
        quantity: 4,
      },
    ],
  },
  {
    id: "204",
    tableNumber: "D405",
    type: "Delivery",
    status: "Serve All",
    timeStatus: "13:45",
    items: [
      {
        name: "Sweet Potato Fries",
        status: "Ready",
        quantity: 1,
      },
      {
        name: "Blackberry Pie",
        status: "Ready",
        quantity: 2,
      },
    ],
  },
  {
    id: "206",
    tableNumber: "B201",
    type: "Table",
    status: "Accept All",
    timeStatus: "13:50",
    items: [
      {
        name: "French Fries",
        status: "Ordered",
        quantity: 3,
        note: "Salt: No",
      },
      {
        name: "Fried Chicken Sandwich",
        status: "Ordered",
        quantity: 1,
        note: "No Ketchup",
      },
      {
        name: "Soda",
        status: "Ready",
        quantity: 4,
      },
    ],
  },
  {
    id: "264",
    tableNumber: "D405",
    type: "Delivery",
    status: "Serve All",
    timeStatus: "13:45",
    items: [
      {
        name: "Sweet Potato Fries",
        status: "Ready",
        quantity: 1,
      },
      {
        name: "Blackberry Pie",
        status: "Ready",
        quantity: 2,
      },
    ],
  },
  {
    id: "256",
    tableNumber: "B201",
    type: "Table",
    status: "Accept All",
    timeStatus: "13:50",
    items: [
      {
        name: "French Fries",
        status: "Ordered",
        quantity: 3,
        note: "Salt: No",
      },
      {
        name: "Fried Chicken Sandwich",
        status: "Ordered",
        quantity: 1,
        note: "No Ketchup",
      },
      {
        name: "Soda",
        status: "Ready",
        quantity: 4,
      },
    ],
  },

  {
    id: "234",
    tableNumber: "D405",
    type: "Delivery",
    status: "Serve All",
    timeStatus: "13:45",
    items: [
      {
        name: "Sweet Potato Fries",
        status: "Ready",
        quantity: 1,
      },
      {
        name: "Blackberry Pie",
        status: "Ready",
        quantity: 2,
      },
    ],
  },
  {
    id: "2236",
    tableNumber: "B201",
    type: "Table",
    status: "Accept All",
    timeStatus: "13:50",
    items: [
      {
        name: "French Fries",
        status: "Ordered",
        quantity: 3,
        note: "Salt: No",
      },
      {
        name: "Fried Chicken Sandwich",
        status: "Ordered",
        quantity: 1,
        note: "No Ketchup",
      },
      {
        name: "Soda",
        status: "Ready",
        quantity: 4,
      },
    ],
  },
]

export function OrderContent() {
  return (
    <div className="flex-1 overflow-auto p-4">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {orders
            .filter((_, index) => index % 4 === colIndex)
            .map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
        </div>
      ))}
    </div>
  </div>
  
  )
}
