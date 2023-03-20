export interface IPizzaItem {
  id: string;
  productId: number;
  imageUrl: string;
  title: string;
  types: [
    {
      id: number;
      thickness: string;
      value: string;
      price: number;
    }
  ];
  sizes: [
    {
      id: number;
      value: number;
      width: string;
      price: number;
    }
  ];
  price: number;
  category: number;
  rating: number;
  description: string;
}
