import React, { useState, useMemo } from 'react';
import { Sparkles, MessageCircle, Flame, CheckCircle2, Gift } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import {
  HAMBURGERS,
  HOTDOG_AND_PORTIONS,
  PIZZAS_SALGADAS,
  PIZZAS_DOCES_PADRAO,
  PIZZAS_DOCES_ESPECIAIS,
  BEBIDAS,
  RESTAURANT_INFO,
} from '../data/menuData';
import {
  getBurgerClicks,
  registerBurgerOrderClick,
  getTopTwoBurgers,
} from '../utils/burgerRankTracker';
import { PizzaSizeBanner } from './PizzaSizeBanner';

interface DigitalMenuViewProps {
  activeCategory: MenuCategory;
  searchQuery: string;
  onGoToRoulette?: () => void;
}

export const DigitalMenuView: React.FC<DigitalMenuViewProps> = ({
  activeCategory,
  searchQuery,
  onGoToRoulette,
}) => {
  const query = searchQuery.trim().toLowerCase();

  // Dynamic burger click tracking to highlight exactly the 2 most ordered burgers
  const [burgerClicks, setBurgerClicks] = useState<Record<string, number>>(getBurgerClicks);
  const [recentOrderId, setRecentOrderId] = useState<string | null>(null);

  const { top1Id, top2Id } = useMemo(
    () => getTopTwoBurgers(HAMBURGERS, burgerClicks),
    [burgerClicks]
  );

  const handleBurgerOrder = (burgerId: string) => {
    const updated = registerBurgerOrderClick(burgerId);
    setBurgerClicks(updated);
    setRecentOrderId(burgerId);
    setTimeout(() => {
      setRecentOrderId((prev) => (prev === burgerId ? null : prev));
    }, 2800);
  };

  const filterItems = (items: MenuItem[]) => {
    if (!query) return items;
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.price && item.price.toLowerCase().includes(query)) ||
        (item.badge && item.badge.toLowerCase().includes(query))
    );
  };

  const filteredHamburgers = filterItems(HAMBURGERS);
  const filteredHotdogPortions = filterItems(HOTDOG_AND_PORTIONS);
  const filteredPizzasSalgadas = filterItems(PIZZAS_SALGADAS);
  const filteredPizzasDocesPadrao = filterItems(PIZZAS_DOCES_PADRAO);
  const filteredPizzasDocesEspeciais = filterItems(PIZZAS_DOCES_ESPECIAIS);
  const filteredBebidas = filterItems(BEBIDAS);

  const totalFilteredCount =
    filteredHamburgers.length +
    filteredHotdogPortions.length +
    filteredPizzasSalgadas.length +
    filteredPizzasDocesPadrao.length +
    filteredPizzasDocesEspeciais.length +
    filteredBebidas.length;

  const getWhatsAppItemLink = (itemName: string) => {
    const text = `Olá! Gostaria de pedir: *${itemName}* pelo cardápio.`;
    return `https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-10" id="digital-menu-container">
      {/* Search results notice if searching */}
      {query && (
        <div className="bg-[#fff7ed] border border-[#ea580c]/30 rounded-xl p-3 text-center">
          <p className="text-sm font-semibold text-[#8d3a14]">
            {totalFilteredCount > 0
              ? `Encontrados ${totalFilteredCount} itens com o termo "${searchQuery}"`
              : `Nenhum item encontrado com o termo "${searchQuery}". Tente outra palavra!`}
          </p>
        </div>
      )}

      {/* Promoção Roleta de Prêmios Touros Burguer */}
      {!query && onGoToRoulette && (
        <div className="bg-gradient-to-r from-[#ea580c] via-[#d97706] to-[#b45309] text-white p-4 sm:p-5 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="p-3 bg-white/15 rounded-2xl backdrop-blur-xs shrink-0 text-3xl shadow-inner">
              🎰
            </div>
            <div>
              <div className="inline-flex items-center gap-1 bg-[#f5c242] text-[#451a03] text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full mb-1 shadow-xs">
                <Sparkles className="w-3 h-3 fill-[#451a03]" />
                Promoção Exclusiva da Casa
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wide font-brand">
                Roleta de Prêmios Touros Burguer!
              </h3>
              <p className="text-xs text-amber-100 font-medium mt-0.5">
                Gire a nossa roleta oficial e ganhe prêmios instantâneos para o seu pedido pelo WhatsApp.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onGoToRoulette}
            className="bg-white text-[#8d3a14] hover:bg-amber-50 font-black text-xs uppercase px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0 flex items-center gap-2 cursor-pointer"
            id="menu-open-roulette-banner-btn"
          >
            <Gift className="w-4 h-4 text-[#ea580c]" />
            <span>Girar Roleta de Prêmios</span>
          </button>
        </div>
      )}

      {/* 1. SEÇÃO HAMBÚRGUERES */}
      {(activeCategory === 'todos' || activeCategory === 'hamburgueres') && filteredHamburgers.length > 0 && (
        <section id="section-hamburgueres" className="space-y-4">
          <div className="bg-[#8d3a14] text-white px-4 py-2.5 rounded-xl shadow flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🍔</span>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide font-brand">
                Hambúrgueres Artesanais
              </h2>
            </div>
            <span className="text-xs bg-[#6b2c0f] px-2.5 py-1 rounded-full text-amber-200 font-bold">
              {filteredHamburgers.length} opções
            </span>
          </div>

          {/* Grid com Todos os Hambúrgueres */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredHamburgers.map((item) => {
              const isTop1 = item.id === top1Id;
              const isTop2 = item.id === top2Id;
              const isHighlighted = isTop1 || isTop2;
              const orderClicksCount = burgerClicks[item.id] ?? 0;
              const justOrdered = recentOrderId === item.id;

              return (
                <div
                  key={item.id}
                  className={`border rounded-xl p-4 transition-all flex flex-col justify-between ${
                    isTop1
                      ? 'bg-gradient-to-r from-white via-white to-[#fff7ed] border-2 border-[#ea580c] ring-2 ring-[#ea580c]/25 shadow-md'
                      : isTop2
                      ? 'bg-gradient-to-r from-white via-white to-[#fefce8] border-2 border-amber-500 ring-2 ring-amber-400/25 shadow-md'
                      : 'bg-white border-[#e8dbcb] shadow-xs hover:shadow-md'
                  }`}
                  id={`item-${item.id}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-extrabold text-[#7c2d12] text-base sm:text-lg uppercase">
                          {item.name}
                        </h3>

                        {/* Exact Top 2 Highlight Badges based on customer orders */}
                        {isTop1 && (
                          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-black px-2 py-0.5 rounded-md bg-[#ea580c] text-white shadow-xs">
                            <Flame className="w-3 h-3 fill-amber-300 text-amber-300" />
                            #1 Mais Pedido ({orderClicksCount} {orderClicksCount === 1 ? 'pedido' : 'pedidos'})
                          </span>
                        )}

                        {isTop2 && (
                          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-black px-2 py-0.5 rounded-md bg-amber-500 text-white shadow-xs">
                            <Sparkles className="w-3 h-3 fill-amber-100 text-amber-100" />
                            #2 Mais Pedido ({orderClicksCount} {orderClicksCount === 1 ? 'pedido' : 'pedidos'})
                          </span>
                        )}

                        {/* Standard badge if present and not top 2 */}
                        {!isHighlighted && item.badge && (
                          <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-md bg-[#8d3a14] text-white shadow-xs">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <span className={`font-black text-base sm:text-lg whitespace-nowrap px-2.5 py-0.5 rounded-lg border ${
                        isTop1
                          ? 'text-[#ea580c] bg-orange-50 border-orange-200'
                          : isTop2
                          ? 'text-amber-700 bg-amber-50 border-amber-200'
                          : 'text-[#9a3412] bg-[#faf7f2] border-[#e8dbcb]'
                      }`}>
                        {item.price}
                      </span>
                    </div>

                    <p className="text-sm text-[#4e3b30] mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-dashed border-[#e8dbcb] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#8c7362] font-medium text-[11px]">
                        Touros Artesanal
                      </span>
                      {justOrdered && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded animate-pulse">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          +1 clique computado!
                        </span>
                      )}
                    </div>

                    <a
                      href={getWhatsAppItemLink(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleBurgerOrder(item.id)}
                      className={`inline-flex items-center gap-1.5 font-bold hover:underline transition-colors ${
                        isHighlighted
                          ? 'text-[#ea580c] hover:text-[#c2410c] font-black'
                          : 'text-[#8d3a14] hover:text-[#7c2d12]'
                      }`}
                      title="Pedir este hambúrguer no WhatsApp (computa nos mais pedidos)"
                      id={`order-btn-${item.id}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Pedir pelo WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 2. SEÇÃO HOT DOG & PORÇÕES */}
      {(activeCategory === 'todos' || activeCategory === 'hotdog-porcoes') && filteredHotdogPortions.length > 0 && (
        <section id="section-hotdog-porcoes" className="space-y-4">
          <div className="bg-[#8d3a14] text-white px-4 py-2.5 rounded-xl shadow flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌭</span>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide font-brand">
                Hot Dog & Porções da Casa
              </h2>
            </div>
            <span className="text-xs bg-[#6b2c0f] px-2.5 py-1 rounded-full text-amber-200 font-bold">
              {filteredHotdogPortions.length} itens
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredHotdogPortions.map((item) => (
              <div
                key={item.id}
                className={`bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                  item.highlight
                    ? 'border-[#ea580c] bg-gradient-to-r from-white via-white to-[#fff2e8]'
                    : 'border-[#e8dbcb]'
                }`}
                id={`item-${item.id}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-extrabold text-[#7c2d12] text-base sm:text-lg uppercase">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-md bg-[#ea580c] text-white">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    {item.price && (
                      <span className="font-black text-[#9a3412] text-base sm:text-lg whitespace-nowrap bg-[#faf7f2] px-2.5 py-0.5 rounded-lg border border-[#e8dbcb]">
                        {item.price}
                      </span>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-sm text-[#4e3b30] mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {/* Multiple sizes / prices (e.g. P and G) */}
                  {item.prices && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.prices.map((p, idx) => (
                        <div
                          key={idx}
                          className="bg-[#faf7f2] border border-[#d8c6b2] px-3 py-1 rounded-lg text-xs flex items-center gap-1.5"
                        >
                          <span className="text-[#634832] font-semibold">{p.label}:</span>
                          <span className="text-[#9a3412] font-black">{p.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-2.5 border-t border-dashed border-[#e8dbcb] flex items-center justify-between text-xs">
                  <span className="text-[#8c7362] font-medium text-[11px]">
                    Porções Selecionadas
                  </span>
                  <a
                    href={getWhatsAppItemLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#8d3a14] hover:text-[#7c2d12] font-bold hover:underline"
                    id={`order-btn-${item.id}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Pedir pelo WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. SEÇÃO PIZZAS SALGADAS */}
      {(activeCategory === 'todos' || activeCategory === 'pizzas-salgadas') && filteredPizzasSalgadas.length > 0 && (
        <section id="section-pizzas-salgadas" className="space-y-4">
          <div className="bg-[#8d3a14] text-white px-4 py-2.5 rounded-xl shadow flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🍕</span>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide font-brand">
                Pizzas Salgadas
              </h2>
            </div>
            <span className="text-xs bg-[#6b2c0f] px-2.5 py-1 rounded-full text-amber-200 font-bold">
              {filteredPizzasSalgadas.length} sabores
            </span>
          </div>

          {/* Pizza Size Guide */}
          <PizzaSizeBanner type="salgadas" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredPizzasSalgadas.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e8dbcb] rounded-xl p-3.5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                id={`item-${item.id}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 pb-1 border-b border-dotted border-[#d8c6b2]">
                    <h3 className="font-extrabold text-[#7c2d12] text-sm sm:text-base uppercase tracking-tight">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-bold text-[#9a3412] whitespace-nowrap">
                      M R$50 | G R$62
                    </span>
                  </div>
                  <p className="text-xs text-[#4e3b30] mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-2.5 pt-1.5 border-t border-dashed border-[#f0e6da] flex items-center justify-between text-[11px]">
                  <span className="text-[#8c7362]">Até 2 sabores</span>
                  <a
                    href={getWhatsAppItemLink(`Pizza ${item.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#8d3a14] hover:text-[#7c2d12] font-bold"
                    id={`order-btn-${item.id}`}
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>Pedir</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. SEÇÃO PIZZAS DOCES */}
      {(activeCategory === 'todos' || activeCategory === 'pizzas-doces') && (
        <section id="section-pizzas-doces" className="space-y-6">
          <div className="bg-[#8d3a14] text-white px-4 py-2.5 rounded-xl shadow flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🍫</span>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide font-brand">
                Pizzas Doces
              </h2>
            </div>
            <span className="text-xs bg-[#6b2c0f] px-2.5 py-1 rounded-full text-amber-200 font-bold">
              {filteredPizzasDocesPadrao.length + filteredPizzasDocesEspeciais.length} sabores
            </span>
          </div>

          <PizzaSizeBanner type="doces" />

          {/* Sub 1: Doces Padrão */}
          {filteredPizzasDocesPadrao.length > 0 && (
            <div className="space-y-3">
              <div className="bg-[#7c2d12] text-amber-100 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                <span>🍫 Pizzas Doces Padrão</span>
                <span className="text-amber-200">M (6 Fatias) R$ 52,00 • G (8 Fatias) R$ 65,00</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {filteredPizzasDocesPadrao.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-[#e8dbcb] rounded-xl p-3 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    id={`item-${item.id}`}
                  >
                    <div>
                      <h3 className="font-extrabold text-[#7c2d12] text-sm uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#4e3b30] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-2 pt-1 border-t border-dashed border-[#e8dbcb] flex justify-end">
                      <a
                        href={getWhatsAppItemLink(`Pizza Doce ${item.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#8d3a14] hover:text-[#7c2d12] font-bold text-[11px]"
                        id={`order-btn-${item.id}`}
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>Pedir</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub 2: Doces Especiais */}
          {filteredPizzasDocesEspeciais.length > 0 && (
            <div className="space-y-3">
              <div className="bg-[#ea580c] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                <span>⭐ Pizzas Doces Especiais</span>
                <span className="text-amber-100 font-black">M (6 Fatias) R$ 54,00 • G (8 Fatias) R$ 68,00</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredPizzasDocesEspeciais.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border-2 border-[#ea580c]/30 rounded-xl p-3.5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    id={`item-${item.id}`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-extrabold text-[#7c2d12] text-sm uppercase flex items-center gap-1">
                          <span>{item.name}</span>
                          <Sparkles className="w-3 h-3 text-amber-500" />
                        </h3>
                        <span className="text-[10px] bg-orange-100 text-orange-900 font-bold px-1.5 py-0.5 rounded">
                          Especial
                        </span>
                      </div>
                      <p className="text-xs text-[#4e3b30] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-2 pt-1 border-t border-dashed border-[#e8dbcb] flex justify-end">
                      <a
                        href={getWhatsAppItemLink(`Pizza Doce Especial ${item.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#8d3a14] hover:text-[#7c2d12] font-bold text-[11px]"
                        id={`order-btn-${item.id}`}
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>Pedir</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* 5. SEÇÃO BEBIDAS */}
      {(activeCategory === 'todos' || activeCategory === 'bebidas') && filteredBebidas.length > 0 && (
        <section id="section-bebidas" className="space-y-4">
          <div className="bg-[#8d3a14] text-white px-4 py-2.5 rounded-xl shadow flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥤</span>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide font-brand">
                Bebidas Geladas
              </h2>
            </div>
            <span className="text-xs bg-[#6b2c0f] px-2.5 py-1 rounded-full text-amber-200 font-bold">
              {filteredBebidas.length} opções
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredBebidas.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e8dbcb] rounded-xl p-3 shadow-xs hover:shadow-md transition-all flex items-center justify-between"
                id={`item-${item.id}`}
              >
                <div>
                  <h3 className="font-extrabold text-[#7c2d12] text-sm uppercase">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-[11px] text-[#8c7362] mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className="font-black text-[#9a3412] text-sm whitespace-nowrap bg-[#faf7f2] px-2 py-0.5 rounded border border-[#e8dbcb] block">
                    {item.price}
                  </span>
                  <a
                    href={getWhatsAppItemLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#8d3a14] font-bold mt-1 hover:underline"
                    id={`order-btn-${item.id}`}
                  >
                    <MessageCircle className="w-2.5 h-2.5 text-emerald-600" />
                    <span>Pedir</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
