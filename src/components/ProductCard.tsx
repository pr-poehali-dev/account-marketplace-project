import { Link } from "react-router-dom";
import { Star, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
  seller: {
    name: string;
    avatar: string;
    verified: boolean;
    reviews: number;
  };
  discount?: number;
  isHot?: boolean;
};

const ProductCard = ({
  id,
  title,
  price,
  image,
  rating,
  seller,
  discount,
  isHot
}: ProductCardProps) => {
  return (
    <div className="bg-custom-black-light border border-custom-green/20 rounded-lg overflow-hidden hover:shadow-md hover:shadow-custom-green/10 transition-shadow">
      {/* Изображение товара */}
      <div className="relative">
        <Link to={`/product/${id}`}>
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-40 object-cover"
          />
        </Link>
        {discount && (
          <div className="absolute top-2 left-2 bg-custom-green text-custom-black px-2 py-1 rounded text-xs font-bold">
            -{discount}%
          </div>
        )}
        {isHot && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            HOT
          </div>
        )}
      </div>

      {/* Информация о товаре */}
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-white font-medium line-clamp-2 h-12 hover:text-custom-green transition-colors">
            {title}
          </h3>
        </Link>

        {/* Информация о продавце */}
        <div className="flex items-center mt-2 mb-3">
          <img
            src={seller.avatar || "/placeholder.svg"}
            alt={seller.name}
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-sm text-gray-300 mr-1">{seller.name}</span>
          {seller.verified && (
            <Shield className="w-4 h-4 text-custom-green" title="Проверенный продавец" />
          )}
          <div className="flex items-center ml-auto">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm text-gray-300">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Цена и кнопка покупки */}
        <div className="flex items-center justify-between">
          <div>
            {discount ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-custom-green mr-2">
                  {(price * (1 - discount / 100)).toFixed(0)} ₽
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {price.toFixed(0)} ₽
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-custom-green">
                {price.toFixed(0)} ₽
              </span>
            )}
          </div>
          <Button 
            variant="outline" 
            className="border-custom-green text-custom-green hover:bg-custom-green hover:text-custom-black"
          >
            Купить
          </Button>
        </div>

        {/* Количество отзывов */}
        <div className="flex items-center mt-3 text-sm text-gray-400">
          <MessageSquare className="w-4 h-4 mr-1" />
          <span>{seller.reviews} отзывов</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
