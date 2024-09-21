export interface RestaurantCardProps {
  id: string;
  name: string;
  category: string;
  isFavorite: boolean;
  rating: number;
  ratingCount: number;
  city: string;
  desc: string;
  images: string[];
  priceRange: string;
  featured: {
    text: string;
    icon: string;
  };
}

export interface RestaurantListProps {
  restaurants: RestaurantCardProps[];
}
