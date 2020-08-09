let products = [
  {
    id: "1",
    title: "iphone 11",
    price: 1000,
    currency: "USD",
  },
  {
    id: "2",
    title: "iphone 12",
    price: 2000,
    currency: "USD",
  },
  {
    id: "3",
    title: "iphone 13",
    price: 3000,
    currency: "USD",
  },
];

class Product {
  products({ response }: { response: any }) {
    response.body = {
      success: true,
      data: products,
    };
  }
}
export default new Product();
