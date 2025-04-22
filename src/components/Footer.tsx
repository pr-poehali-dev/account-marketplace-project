import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  Shield, 
  CreditCard 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-custom-black text-white border-t border-custom-green/20 mt-12">
      <div className="container max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-lg font-bold text-custom-green mb-4">GameMarket</h3>
            <p className="text-sm text-gray-300 mb-4">
              Безопасная площадка для покупки и продажи игровых аккаунтов, предметов и услуг.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-custom-green">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-custom-green">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-custom-green">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-custom-green">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Помощь */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Помощь</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-gray-300 hover:text-custom-green">Как покупать</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-custom-green">Как продавать</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-custom-green">Гарантии безопасности</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-custom-green">Правила сервиса</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-custom-green">Частые вопросы</Link></li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-gray-300 hover:text-custom-green">О нас</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-custom-green">Контакты</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-custom-green">Отзывы</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-custom-green">Партнерская программа</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-custom-green">Блог</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-custom-green mr-2" />
                <a href="mailto:support@gamemarket.ru" className="text-gray-300 hover:text-custom-green">
                  support@gamemarket.ru
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-custom-green mr-2" />
                <a href="tel:88001234567" className="text-gray-300 hover:text-custom-green">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-start mt-4">
                <Shield className="h-4 w-4 text-custom-green mr-2 mt-1" />
                <span className="text-gray-300">
                  Все платежи защищены. Комиссия системы составляет 5% от суммы сделки.
                </span>
              </li>
              <li className="flex items-center mt-2">
                <CreditCard className="h-4 w-4 text-custom-green mr-2" />
                <span className="text-gray-300">Карта: 2200 7005 2050 9505</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-custom-green/20 mt-8 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <p>© 2023 GameMarket. Все права защищены.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-custom-green">Пользовательское соглашение</Link>
            <Link to="#" className="hover:text-custom-green">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
