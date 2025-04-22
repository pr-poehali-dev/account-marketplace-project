import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type Category = {
  id: number;
  name: string;
  icon: string;
  slug: string;
  subcategories?: { id: number; name: string; slug: string }[];
};

const categories: Category[] = [
  {
    id: 1,
    name: "Шутеры",
    icon: "🎯",
    slug: "shooters",
    subcategories: [
      { id: 101, name: "CS:GO", slug: "csgo" },
      { id: 102, name: "Valorant", slug: "valorant" },
      { id: 103, name: "Fortnite", slug: "fortnite" }
    ]
  },
  {
    id: 2,
    name: "MMO/RPG",
    icon: "⚔️",
    slug: "mmorpg",
    subcategories: [
      { id: 201, name: "World of Warcraft", slug: "wow" },
      { id: 202, name: "Final Fantasy XIV", slug: "ffxiv" },
      { id: 203, name: "Genshin Impact", slug: "genshin" }
    ]
  },
  {
    id: 3,
    name: "Мобильные игры",
    icon: "📱",
    slug: "mobile",
    subcategories: [
      { id: 301, name: "Clash Royale", slug: "clash-royale" },
      { id: 302, name: "PUBG Mobile", slug: "pubg-mobile" },
      { id: 303, name: "Free Fire", slug: "free-fire" }
    ]
  }
];

const CategoryMenu = () => {
  return (
    <div className="bg-custom-black-light rounded-lg overflow-hidden border border-custom-green/20">
      <div className="py-3 px-4 bg-custom-black border-b border-custom-green/20">
        <h3 className="font-bold text-white">Категории игр</h3>
      </div>
      <ul className="divide-y divide-custom-green/10">
        {categories.map((category) => (
          <li key={category.id} className="group">
            <Link
              to={`/category/${category.slug}`}
              className="flex items-center justify-between p-3 hover:bg-custom-black/50 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">{category.icon}</span>
                <span className="text-white group-hover:text-custom-green">{category.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-custom-green opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            {category.subcategories && (
              <ul className="bg-custom-black/30 pl-10">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.id}>
                    <Link
                      to={`/category/${category.slug}/${subcategory.slug}`}
                      className="block py-2 px-3 text-sm text-gray-300 hover:text-custom-green hover:bg-custom-black/50 transition-colors"
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
      <div className="p-3 border-t border-custom-green/20">
        <Link
          to="/categories"
          className="text-sm text-custom-green hover:text-custom-green-light flex items-center justify-center"
        >
          Все категории
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryMenu;
