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

export interface ISortItem {
  id: number;
  sort: string;
  sortName: string;
}

export interface IFilterState {
  sort: ISortItem;
  order: boolean;
  searchValue: string;
  category: number;
}
