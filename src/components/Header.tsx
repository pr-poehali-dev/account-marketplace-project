import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, ShoppingCart, User, Bell, MessageSquare, ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-lox-black border-b border-lox-blue/20 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-lox-blue">L0xmach<span className="text-white">-Market</span></span>
          </Link>

          {/* Навигация (скрыта на мобильном) */}
          <nav className="hidden md:flex items-center gap-2 ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-lox-blue hover:bg-lox-black-light">
                  Игры
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-lox-black-light border-lox-blue/20">
                <DropdownMenuItem className="text-white hover:text-lox-blue hover:bg-lox-black">
                  CS:GO
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:text-lox-blue hover:bg-lox-black">
                  Dota 2
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:text-lox-blue hover:bg-lox-black">
                  Valorant
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:text-lox-blue hover:bg-lox-black">
                  Все игры
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="text-white hover:text-lox-blue hover:bg-lox-black-light">
              Топ продавцы
            </Button>
            
            <Button variant="ghost" className="text-white hover:text-lox-blue hover:bg-lox-black-light">
              Гарантии
            </Button>
            
            <Button variant="ghost" className="text-white hover:text-lox-blue hover:bg-lox-black-light">
              Помощь
            </Button>
          </nav>

          {/* Поисковая строка */}
          <div className="hidden md:flex relative flex-1 mx-6 max-w-md">
            <input
              type="text"
              placeholder="Поиск аккаунтов, игр, предметов..."
              className="w-full py-2 px-4 pr-10 rounded-md bg-lox-black-light border border-lox-blue/20 focus:border-lox-blue focus:outline-none text-white"
            />
            <Button variant="ghost" className="absolute right-0 top-0 h-full text-lox-blue hover:text-lox-blue-light hover:bg-transparent">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Действия пользователя (скрыты на мобильном) */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="p-2 text-white hover:text-lox-blue hover:bg-lox-black-light relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-lox-blue text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Button>
            
            <Button variant="ghost" className="p-2 text-white hover:text-lox-blue hover:bg-lox-black-light relative">
              <MessageSquare className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-lox-blue text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Button>

            <Button variant="ghost" className="p-2 text-white hover:text-lox-blue hover:bg-lox-black-light">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-lox-blue text-lox-blue hover:bg-lox-black-light">
                  <User className="h-5 w-5 mr-2" />
                  Аккаунт
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-lox-black-light border-lox-blue/20">
                <DropdownMenuItem className="text-white hover:text-lox-blue hover:bg-lox-black">
                  Войти
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:text-lox-blue hover:bg-lox-black">
                  Регистрация
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="bg-lox-blue hover:bg-lox-blue-dark text-white font-medium">
              Продать аккаунт
            </Button>
          </div>

          {/* Мобильная кнопка меню */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" className="text-lox-blue p-2">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-lox-blue p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-lox-blue/20 animate-fade-in">
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск аккаунтов, игр, предметов..."
                  className="w-full py-2 px-4 pr-10 rounded-md bg-lox-black-light border border-lox-blue/20 focus:border-lox-blue focus:outline-none text-white"
                />
                <Button variant="ghost" className="absolute right-0 top-0 h-full text-lox-blue hover:text-lox-blue-light hover:bg-transparent">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
              
              <Button variant="ghost" className="justify-start text-white hover:text-lox-blue hover:bg-lox-black-light">
                Игры
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:text-lox-blue hover:bg-lox-black-light">
                Топ продавцы
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:text-lox-blue hover:bg-lox-black-light">
                Гарантии
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:text-lox-blue hover:bg-lox-black-light">
                Помощь
              </Button>
              
              <div className="flex gap-2 mt-2">
                <Button variant="ghost" className="flex-1 justify-center text-white hover:text-lox-blue hover:bg-lox-black-light">
                  <Bell className="h-5 w-5 mr-1" />
                  Уведомления
                </Button>
                <Button variant="ghost" className="flex-1 justify-center text-white hover:text-lox-blue hover:bg-lox-black-light">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  Сообщения
                </Button>
                <Button variant="ghost" className="flex-1 justify-center text-white hover:text-lox-blue hover:bg-lox-black-light">
                  <ShoppingCart className="h-5 w-5 mr-1" />
                  Корзина
                </Button>
              </div>
              
              <Button variant="ghost" className="justify-start text-white hover:text-lox-blue hover:bg-lox-black-light">
                <User className="h-5 w-5 mr-2" />
                Войти
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:text-lox-blue hover:bg-lox-black-light">
                <User className="h-5 w-5 mr-2" />
                Регистрация
              </Button>
              <Button className="bg-lox-blue hover:bg-lox-blue-dark text-white font-medium mt-2">
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
