export interface Media{
    type: 'image' | 'video';
    src: string;
    alt?: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    media: Media[];
    colors?: number;
  }

export interface ProductDetailType {
    id: number;
    name: string;
    price: number;
    description: string;
    colors?: Array<{
      name: string;
      code: string;
    }>;
    deliveryTime?: string;
    composition?: string;
    care?: string;
    images: string[];
  }