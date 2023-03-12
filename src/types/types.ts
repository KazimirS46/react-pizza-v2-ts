export interface IPizzaItem {
  id: string;
  productId: number;
  imageUrl: string;
  title: string;
  types: [
    {
      thickness: string;
      value: string;
    }
  ];
  sizes: [
    {
      width: string;
      value: number;
    }
  ];
  price: number;
  category: number;
  rating: number;
  description: string;
}
