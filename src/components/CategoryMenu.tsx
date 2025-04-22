import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

interface CategoryType {
  id: number;
  name: string;
  icon: string;
  slug: string;
  subcategories?: {
    id: number;
    name: string;
    slug: string;
  }[];
}

// Фейковые данные категорий
const categories: CategoryType[] = [
  {
    id: 1,
    name: "CS:GO",
    icon: "🎯",
    slug: "csgo",
    subcategories: [
      { id: 101, name: "Аккаунты", slug: "accounts" },
      { id: 102, name: "Ключи", slug: "keys" },
      { id: 103, name: "Скины", slug: "skins" }
    ]
  },
  {
    id: 2,
    name: "Dota 2",
    icon: "🛡️",
    slug: "dota2",
    subcategories: [
      { id: 201, name: "Аккаунты", slug: "accounts" },
      { id: 202, name: "Сеты", slug: "sets" },
      { id: 203, name: "Предметы", slug: "items" }
    ]
  },
  {
    id: 3,
    name: "Valorant",
    icon: "🔫",
    slug: "valorant",
    subcategories: [
      { id: 301, name: "Аккаунты", slug: "accounts" },
      { id: 302, name: "Скины", slug: "skins" }
    ]
  },
  {
    id: 4,
    name: "Fortnite",
    icon: "🏝️",
    slug: "fortnite",
    subcategories: [
      { id: 401, name: "Аккаунты", slug: "accounts" },
      { id: 402, name: "V-Bucks", slug: "vbucks" }
    ]
  },
  {
    id: 5,
    name: "Genshin Impact",
    icon: "⚔️",
    slug: "genshin",
    subcategories: [
      { id: 501, name: "Аккаунты", slug: "accounts" },
      { id: 502, name: "Кристаллы", slug: "crystals" }
    ]
  },
  {
    id: 6,
    name: "Minecraft",
    icon: "🧱",
    slug: "minecraft",
    subcategories: [
      { id: 601, name: "Аккаунты", slug: "accounts" },
      { id: 602, name: "Предметы", slug: "items" }
    ]
  }
];

const CategoryMenu: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const toggleCategory = (categoryId: number) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  return (
    <div className="bg-lox-black-light rounded-lg overflow-hidden border border-lox-blue/20">
      <div className="py-3 px-4 bg-lox-black border-b border-lox-blue/20">
        <h3 className="font-semibold text-white">Каталог игр</h3>
      </div>
      <ul className="py-2">
        {categories.map(category => (
          <li key={category.id} className="border-b border-lox-blue/10 last:border-0">
            <div 
              className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-lox-black transition-colors"
              onClick={() => toggleCategory(category.id)}
            >
              <Link 
                to={`/category/${category.slug}`}
                className="flex items-center flex-grow text-white hover:text-lox-blue"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </Link>
              {category.subcategories && category.subcategories.length > 0 && (
                <button className="text-lox-blue">
                  {expandedCategories.includes(category.id) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
            
            {expandedCategories.includes(category.id) && category.subcategories && (
              <ul className="bg-lox-black/50 pl-10 pr-4">
                {category.subcategories.map(subcategory => (
                  <li key={subcategory.id}>
                    <Link 
                      to={`/category/${category.slug}/${subcategory.slug}`}
                      className="block py-2 text-gray-300 hover:text-lox-blue text-sm"
                    >
                      {subcategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
