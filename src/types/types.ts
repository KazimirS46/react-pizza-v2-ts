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

export interface IThicknessPrice {
  thickness: string;
  price: number;
}

export interface IWidthPrice {
  width: string;
  price: number;
}
