import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: number;
  seller: {
    name: string;
    avatar: string;
    verified: boolean;
    reviews: number;
  };
  discount?: number;
  isHot?: boolean;
}

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
  const discountedPrice = discount ? price - (price * discount / 100) : price;
  
  return (
    <Card className="overflow-hidden border border-lox-blue/20 bg-lox-black-light hover:border-lox-blue transition-all duration-200">
      <div className="relative">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-40 object-cover object-center"
          />
        </Link>
        
        <div className="absolute top-2 right-2 flex flex-col gap-1.5">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 bg-lox-black/60 hover:bg-lox-black text-white hover:text-lox-blue rounded-full"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          {discount && (
            <Badge className="bg-lox-blue text-white border-0">
              -{discount}%
            </Badge>
          )}
          {isHot && (
            <Badge variant="outline" className="bg-red-500 text-white border-0">
              HOT
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-3">
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium text-white hover:text-lox-blue transition-colors line-clamp-2 min-h-[2.5rem]">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-center mt-2 mb-1">
          <img 
            src={seller.avatar} 
            alt={seller.name} 
            className="w-5 h-5 rounded-full mr-1.5"
          />
          <Link to={`/seller/${seller.name}`} className="text-sm text-gray-300 hover:text-lox-blue">
            {seller.name}
          </Link>
          {seller.verified && (
            <ShieldCheck className="w-4 h-4 text-lox-blue ml-1" />
          )}
        </div>
        
        {rating && (
          <div className="flex items-center text-sm text-gray-300">
            <Star className="w-4 h-4 text-yellow-400 mr-1 fill-yellow-400" />
            <span>{rating}</span>
            <span className="mx-1">•</span>
            <span>{seller.reviews} отзывов</span>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-3 pt-0 flex items-center justify-between">
        <div>
          {discount ? (
            <div className="flex flex-col">
              <span className="text-gray-400 line-through text-xs">{price.toLocaleString()} ₽</span>
              <span className="font-bold text-lox-blue">{discountedPrice.toLocaleString()} ₽</span>
            </div>
          ) : (
            <span className="font-bold text-lox-blue">{price.toLocaleString()} ₽</span>
          )}
        </div>
        <Button size="sm" className="bg-lox-blue text-white hover:bg-lox-blue-dark">
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
