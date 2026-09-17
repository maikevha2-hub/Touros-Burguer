import React from 'react';
import { Search, X } from 'lucide-react';
import { MenuCategory } from '../types';

interface CategoryNavProps {
  activeCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  itemCounts: Record<MenuCategory, number>;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  itemCounts,
}) => {
  const categories: { id: MenuCategory; label: string; icon: string }[] = [
    { id: 'todos', label: 'Todos', icon: '📋' },
    { id: 'hamburgueres', label: 'Hambúrgueres', icon: '🍔' },
    { id: 'hotdog-porcoes', label: 'Hot Dog & Porções', icon: '🌭' },
    { id: 'pizzas-salgadas', label: 'Pizzas Salgadas', icon: '🍕' },
    { id: 'pizzas-doces', label: 'Pizzas Doces', icon: '🍫' },
    { id: 'bebidas', label: 'Bebidas', icon: '🥤' },
  ];

  return (
    <div className="sticky top-0 z-30 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e0cfb8] shadow-sm py-3 px-4 no-print">
      <div className="max-w-6xl mx-auto space-y-3">
        {/* Search Field */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8d3a14]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por nome ou ingrediente (ex: bacon, nutella, catupiry)..."
            className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#d8c6b2] focus:border-[#8d3a14] focus:ring-2 focus:ring-[#8d3a14]/20 rounded-xl text-sm text-[#261b14] placeholder-[#8c7362] shadow-inner transition-all outline-none"
            id="menu-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#8c7362] hover:text-[#8d3a14]"
              title="Limpar busca"
              id="clear-search-button"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Horizontal Category Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar justify-start sm:justify-center">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = itemCounts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#8d3a14] text-white shadow-md shadow-[#8d3a14]/25 scale-102'
                    : 'bg-white text-[#634832] border border-[#d8c6b2] hover:border-[#8d3a14] hover:text-[#8d3a14]'
                }`}
                id={`cat-btn-${cat.id}`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-0.5 ${
                    isActive ? 'bg-[#6b2c0f] text-amber-200' : 'bg-[#faf7f2] text-[#8c7362]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
