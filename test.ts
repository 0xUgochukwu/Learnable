interface OrderItem {
  item_name: string;
  quantity: number;
  price: number;
  amount: number;
}


export interface IOrder {
  _id: string,
  restaurant_id: string,
  username: string,
  timestamp: number,
  order_items: OrderItem[]
}

  interface ItemSummary {
    item: string;
    price: number;
    quantity: number;
    total: number;
  }
  
  function calculateItemSummary(
    orders: IOrder[],
    from?: number,
    to?: number
  ): ItemSummary[] {
    const itemSummaryMap = new Map<string, ItemSummary>();
  
    const now = Date.now();
  
    from = from || (now - 24 * 60 * 60 * 1000);
    to = to || now;
  
    orders.forEach((order) => {
      if (order.timestamp >= from! && order.timestamp <= to!) {
        order.order_items.forEach((orderItem: OrderItem) => {
          const key = `${orderItem.item_name}:${orderItem.price}`;
          if (itemSummaryMap.has(key)) {
            const existingSummary = itemSummaryMap.get(key);
            if (existingSummary) {
              existingSummary.quantity += orderItem.quantity;
              existingSummary.total += orderItem.amount;
            }
          } else {
            const newSummary: ItemSummary = {
              item: orderItem.item_name,
              price: orderItem.price,
              quantity: orderItem.quantity,
              total: orderItem.amount,
            };
            itemSummaryMap.set(key, newSummary);
          }
        });
      }
    });
  
    return Array.from(itemSummaryMap.values());
  }
  
  // Sample usage with the provided array of orders
  const orders = [
    {
      "_id": "93074758",
      "restaurant_id": "654321987",
      "username": "dan_smith",
      "order_items": [
        {
          "item_name": "Steak",
          "quantity": 1,
          "price": 25,
          "amount": 25
        },
        {
          "item_name": "Fries",
          "quantity": 2,
          "price": 4,
          "amount": 8
        },
        {
          "item_name": "Soft Drink",
          "quantity": 3,
          "price": 2,
          "amount": 6
        }
      ],
      "timestamp": 1684765536177
    },
    {
      "_id": "83026419",
      "restaurant_id": "654321987",
      "username": "dan_smith",
      "order_items": [
        {
          "item_name": "Steak",
          "quantity": 1,
          "price": 25,
          "amount": 25
        },
        {
          "item_name": "Fries",
          "quantity": 2,
          "price": 4,
          "amount": 8
        },
        {
          "item_name": "Soft Drink",
          "quantity": 3,
          "price": 2,
          "amount": 6
        }
      ],
      "timestamp": 1684765995769
    },
    {
      "_id": "75981014",
      "restaurant_id": "654321987",
      "username": "alice_johnson",
      "order_items": [
        {
          "item_name": "Sushi",
          "quantity": 2,
          "price": 15,
          "amount": 30
        }
      ],
      "timestamp": 1685003269989
    },
    {
      "_id": "38292710",
      "restaurant_id": "654321987",
      "username": "dan_smith",
      "order_items": [
        {
          "item_name": "Steak",
          "quantity": 1,
          "price": 25,
          "amount": 25
        },
        {
          "item_name": "Fries",
          "quantity": 2,
          "price": 4,
          "amount": 8
        },
        {
          "item_name": "Soft Drink",
          "quantity": 3,
          "price": 2,
          "amount": 6
        }
      ],
      "timestamp": 1685003278906
    },
    {
      "_id": "07000378",
      "restaurant_id": "654321987",
      "username": "john_doe",
      "order_items": [
        {
          "item_name": "Pizza",
          "quantity": 2,
          "price": 10,
          "amount": 20
        },
        {
          "item_name": "Burger",
          "quantity": 1,
          "price": 8,
          "amount": 8
        }
      ],
      "timestamp": 1685003285863
    }
  ];
  
  const itemSummary = calculateItemSummary(orders);
  console.log(itemSummary);
  