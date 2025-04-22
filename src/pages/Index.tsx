import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryMenu from "@/components/CategoryMenu";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Search, TrendingUp, Shield, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

// Фейковые данные для демонстрации
const featuredProducts = [
  {
    id: 1,
    title: "Аккаунт CS:GO | 10 Year Coin | Prime | 100+ Скинов | Инвентарь 50000₽",
    price: 25000,
    image: "/placeholder.svg",
    rating: 4.8,
    seller: {
      name: "ProGamer",
      avatar: "/placeholder.svg",
      verified: true,
      reviews: 152
    },
    discount: 15,
    isHot: true
  },
  {
    id: 2,
    title: "Аккаунт Valorant | 50+ Скинов | Все агенты | Immortal Ранг",
    price: 8000,
    image: "/placeholder.svg",
    rating: 4.5,
    seller: {
      name: "GameSeller",
      avatar: "/placeholder.svg",
      verified: true,
      reviews: 78
    }
  },
  {
    id: 3,
    title: "World of Warcraft | Маунты Коллекционные | 60 Уровень | Редкие предметы",
    price: 12000,
    image: "/placeholder.svg",
    rating: 4.9,
    seller: {
      name: "WowMaster",
      avatar: "/placeholder.svg",
      verified: true,
      reviews: 203
    },
    discount: 10
  },
  {
    id: 4,
    title: "Аккаунт Fortnite | Редкие скины | 100+ Скинов | Все сезоны",
    price: 15000,
    image: "/placeholder.svg",
    rating: 4.7,
    seller: {
      name: "FortnitePro",
      avatar: "/placeholder.svg",
      verified: true,
      reviews: 85
    }
  },
  {
    id: 5,
    title: "Dota 2 | Аккаунт 6000 MMR | Все аркана и эксклюзивные сеты",
    price: 20000,
    image: "/placeholder.svg",
    rating: 4.6,
    seller: {
      name: "DotaMaster",
      avatar: "/placeholder.svg",
      verified: true,
      reviews: 124
    },
    discount: 20,
    isHot: true
  },
  {
    id: 6,
    title: "Genshin Impact | AR 60 | Все персонажи | Много 5* оружия",
    price: 30000,
    image: "/placeholder.svg",
    rating: 5.0,
    seller: {
      name: "GenshinKing",
      avatar: "/placeholder.svg",
      verified: true,
      reviews: 65
    }
  }
];

const popularGames = [
  { id: 1, name: "CS:GO", icon: "🎯", slug: "csgo" },
  { id: 2, name: "Dota 2", icon: "🛡️", slug: "dota2" },
  { id: 3, name: "Valorant", icon: "🔫", slug: "valorant" },
  { id: 4, name: "Fortnite", icon: "🏝️", slug: "fortnite" },
  { id: 5, name: "Genshin Impact", icon: "⚔️", slug: "genshin" },
  { id: 6, name: "Minecraft", icon: "🧱", slug: "minecraft" }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-lox-black">
      <Header />
      
      <main className="flex-grow container max-w-7xl mx-auto px-4 py-6">
        {/* Баннер */}
        <div className="bg-gradient-to-r from-lox-black to-lox-black-light border border-lox-blue/20 rounded-lg p-6 mb-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Безопасная площадка для <span className="text-lox-blue">игровых аккаунтов</span>
            </h1>
            <p className="text-gray-300 mb-6">
              Покупайте и продавайте аккаунты для сотен игр с гарантией безопасности.
              Без скрытых комиссий, с защитой от мошенников.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-lox-blue hover:bg-lox-blue-dark text-white font-medium">
                Начать покупать
              </Button>
              <Button variant="outline" className="border-lox-blue text-lox-blue hover:bg-lox-blue hover:text-white">
                Начать продавать
              </Button>
            </div>
          </div>
        </div>

        {/* Три блока преимуществ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-lox-black-light border border-lox-blue/20 rounded-lg p-4 flex items-start">
            <Shield className="w-10 h-10 text-lox-blue mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-white font-bold mb-2">Безопасные сделки</h3>
              <p className="text-gray-300 text-sm">Гарантия возврата средств при любых проблемах с товаром</p>
            </div>
          </div>
          <div className="bg-lox-black-light border border-lox-blue/20 rounded-lg p-4 flex items-start">
            <CreditCard className="w-10 h-10 text-lox-blue mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-white font-bold mb-2">Удобные платежи</h3>
              <p className="text-gray-300 text-sm">Множество способов оплаты и быстрые выплаты продавцам</p>
            </div>
          </div>
          <div className="bg-lox-black-light border border-lox-blue/20 rounded-lg p-4 flex items-start">
            <TrendingUp className="w-10 h-10 text-lox-blue mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-white font-bold mb-2">Выгодные условия</h3>
              <p className="text-gray-300 text-sm">Комиссия всего 5% для продавцов и никаких скрытых платежей</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Левая колонка - категории */}
          <div className="md:col-span-1">
            <CategoryMenu />
            
            {/* Популярные игры */}
            <div className="mt-6 bg-lox-black-light rounded-lg overflow-hidden border border-lox-blue/20">
              <div className="py-3 px-4 bg-lox-black border-b border-lox-blue/20">
                <h3 className="font-bold text-white">Популярные игры</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 p-3">
                {popularGames.map(game => (
                  <Link 
                    key={game.id}
                    to={`/category/${game.slug}`}
                    className="flex items-center p-2 bg-lox-black/50 rounded hover:bg-lox-black transition-colors"
                  >
                    <span className="text-xl mr-2">{game.icon}</span>
                    <span className="text-sm text-white hover:text-lox-blue">{game.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка - контент */}
          <div className="md:col-span-3">
            {/* Поисковая строка */}
            <div className="relative mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск игр, предметов, аккаунтов..."
                className="w-full py-3 px-4 pr-10 rounded-lg bg-lox-black-light border border-lox-blue/20 focus:border-lox-blue focus:outline-none text-white"
              />
              <Button variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 text-lox-blue hover:text-lox-blue-light hover:bg-transparent">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Табы с категориями товаров */}
            <Tabs defaultValue="featured" className="mb-6">
              <TabsList className="bg-lox-black-light border border-lox-blue/20 w-full justify-start">
                <TabsTrigger 
                  value="featured"
                  className="data-[state=active]:bg-lox-blue data-[state=active]:text-white"
                >
                  Популярное
                </TabsTrigger>
                <TabsTrigger 
                  value="new"
                  className="data-[state=active]:bg-lox-blue data-[state=active]:text-white"
                >
                  Новинки
                </TabsTrigger>
                <TabsTrigger 
                  value="sale"
                  className="data-[state=active]:bg-lox-blue data-[state=active]:text-white"
                >
                  Со скидкой
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="featured" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" className="border-lox-blue text-lox-blue hover:bg-lox-blue hover:text-white">
                    Смотреть все предложения
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="new" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredProducts.slice(3, 6).map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="sale" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredProducts.filter(p => p.discount).map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Блок с инструкцией */}
            <div className="bg-lox-black-light border border-lox-blue/20 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Как это работает?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lox-blue text-white font-bold text-xl mb-3">1</div>
                  <h3 className="font-bold text-white mb-2">Выберите товар</h3>
                  <p className="text-gray-300 text-sm">Найдите интересующий вас аккаунт или предмет</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lox-blue text-white font-bold text-xl mb-3">2</div>
                  <h3 className="font-bold text-white mb-2">Оплатите покупку</h3>
                  <p className="text-gray-300 text-sm">Используйте любой удобный способ оплаты</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lox-blue text-white font-bold text-xl mb-3">3</div>
                  <h3 className="font-bold text-white mb-2">Получите товар</h3>
                  <p className="text-gray-300 text-sm">Данные для входа придут вам автоматически</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
