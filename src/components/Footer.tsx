import { Link } from "react-router-dom";
import { 
  Github, 
  Twitter, 
  Instagram, 
  Youtube, 
  CreditCard,
  ShieldCheck,
  HelpCircle
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-lox-black border-t border-lox-blue/20">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">L0xmach-Market</h3>
            <p className="text-gray-400 text-sm mb-4">
              Безопасная площадка для покупки и продажи игровых аккаунтов, предметов и услуг.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-lox-blue">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lox-blue">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lox-blue">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lox-blue">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Покупателям</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-lox-blue text-sm">
                  Как это работает
                </Link>
              </li>
              <li>
                <Link to="/guarantees" className="text-gray-400 hover:text-lox-blue text-sm">
                  Гарантии безопасности
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-lox-blue text-sm">
                  Часто задаваемые вопросы
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-400 hover:text-lox-blue text-sm">
                  Правила сервиса
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Продавцам</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sell" className="text-gray-400 hover:text-lox-blue text-sm">
                  Как стать продавцом
                </Link>
              </li>
              <li>
                <Link to="/commission" className="text-gray-400 hover:text-lox-blue text-sm">
                  Комиссии и выплаты
                </Link>
              </li>
              <li>
                <Link to="/pro-sellers" className="text-gray-400 hover:text-lox-blue text-sm">
                  Преимущества PRO продавцов
                </Link>
              </li>
              <li>
                <Link to="/seller-tips" className="text-gray-400 hover:text-lox-blue text-sm">
                  Советы по продажам
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-gray-400 hover:text-lox-blue text-sm flex items-center">
                  <HelpCircle size={16} className="mr-2" />
                  Служба поддержки
                </Link>
              </li>
              <li>
                <Link to="/payment-methods" className="text-gray-400 hover:text-lox-blue text-sm flex items-center">
                  <CreditCard size={16} className="mr-2" />
                  Способы оплаты
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-400 hover:text-lox-blue text-sm flex items-center">
                  <ShieldCheck size={16} className="mr-2" />
                  Безопасность
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-lox-blue/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} L0xmach-Market. Все права защищены.
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/terms" className="text-sm text-gray-400 hover:text-lox-blue">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-lox-blue">
              Политика конфиденциальности
            </Link>
            <Link to="/cookies" className="text-sm text-gray-400 hover:text-lox-blue">
              Политика cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
