import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, ShoppingCart, User } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-custom-black text-white border-b border-custom-green/20">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-custom-green">Game<span className="text-white">Market</span></span>
          </Link>

          {/* Поисковая строка (скрыта на мобильном) */}
          <div className="hidden md:flex relative flex-1 mx-6 max-w-md">
            <input
              type="text"
              placeholder="Поиск аккаунтов, игр, предметов..."
              className="w-full py-2 px-4 pr-10 rounded-md bg-custom-black-light border border-custom-green/20 focus:border-custom-green focus:outline-none"
            />
            <Button variant="ghost" className="absolute right-0 top-0 h-full text-custom-green hover:text-custom-green-light hover:bg-transparent">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Навигация (скрыта на мобильном) */}
          <nav className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-custom-green hover:bg-custom-black-light">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Корзина
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-custom-green text-custom-green hover:bg-custom-black-light">
                  <User className="h-5 w-5 mr-2" />
                  Аккаунт
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-custom-black-light border-custom-green/20">
                <DropdownMenuItem className="text-white hover:text-custom-green hover:bg-custom-black">
                  Войти
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:text-custom-green hover:bg-custom-black">
                  Регистрация
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="bg-custom-green hover:bg-custom-green-dark text-custom-black font-medium">
              Продать аккаунт
            </Button>
          </nav>

          {/* Мобильная кнопка меню */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" className="text-custom-green p-2">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-custom-green p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-custom-green/20 animate-fade-in">
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск аккаунтов, игр, предметов..."
                  className="w-full py-2 px-4 pr-10 rounded-md bg-custom-black-light border border-custom-green/20 focus:border-custom-green focus:outline-none"
                />
                <Button variant="ghost" className="absolute right-0 top-0 h-full text-custom-green hover:text-custom-green-light hover:bg-transparent">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
              <Button variant="ghost" className="justify-start text-white hover:text-custom-green hover:bg-custom-black-light">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Корзина
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:text-custom-green hover:bg-custom-black-light">
                <User className="h-5 w-5 mr-2" />
                Войти
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:text-custom-green hover:bg-custom-black-light">
                <User className="h-5 w-5 mr-2" />
                Регистрация
              </Button>
              <Button className="bg-custom-green hover:bg-custom-green-dark text-custom-black font-medium mt-2">
                Продать аккаунт
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
