import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { DigitalMenuView } from './components/DigitalMenuView';
import { PrintedLayoutView } from './components/PrintedLayoutView';
import { RouletteView } from './components/RouletteView';
import { Footer } from './components/Footer';
import { MenuCategory, AppViewMode } from './types';
import {
  HAMBURGERS,
  HOTDOG_AND_PORTIONS,
  PIZZAS_SALGADAS,
  PIZZAS_DOCES_PADRAO,
  PIZZAS_DOCES_ESPECIAIS,
  BEBIDAS,
  ALL_MENU_ITEMS,
} from './data/menuData';

export default function App() {
  const [viewMode, setViewMode] = useState<AppViewMode>('digital');
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const itemCounts = useMemo<Record<MenuCategory, number>>(() => {
    return {
      todos: ALL_MENU_ITEMS.length,
      hamburgueres: HAMBURGERS.length,
      'hotdog-porcoes': HOTDOG_AND_PORTIONS.length,
      'pizzas-salgadas': PIZZAS_SALGADAS.length,
      'pizzas-doces': PIZZAS_DOCES_PADRAO.length + PIZZAS_DOCES_ESPECIAIS.length,
      bebidas: BEBIDAS.length,
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col text-[#261b14]">
      {/* Top Main Navigation & Branding */}
      <Header viewMode={viewMode} setViewMode={setViewMode} />

      {/* Main Content Area */}
      <main className="flex-1">
        {viewMode === 'digital' && (
          <>
            <CategoryNav
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              itemCounts={itemCounts}
            />
            <DigitalMenuView
              activeCategory={activeCategory}
              searchQuery={searchQuery}
              onGoToRoulette={() => setViewMode('roleta')}
            />
          </>
        )}

        {viewMode === 'print' && <PrintedLayoutView />}

        {viewMode === 'roleta' && (
          <RouletteView onBackToMenu={() => setViewMode('digital')} />
        )}
      </main>

      {/* Footer */}
      <Footer onGoToRoulette={() => setViewMode('roleta')} />
    </div>
  );
}
