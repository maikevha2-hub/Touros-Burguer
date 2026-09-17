import React from 'react';

interface PizzaSizeBannerProps {
  type?: 'salgadas' | 'doces';
}

export const PizzaSizeBanner: React.FC<PizzaSizeBannerProps> = ({ type = 'salgadas' }) => {
  const isDoces = type === 'doces';

  return (
    <div className="bg-white border-2 border-[#d8c6b2] rounded-2xl p-4 sm:p-5 shadow-sm my-4" id="pizza-size-guide-card">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#e8dbcb]">
        {/* Pizza Media */}
        <div className="flex items-center justify-center gap-4 py-2 md:py-0 md:pr-4">
          <div className="shrink-0 drop-shadow-sm">
            <svg width="56" height="56" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="#d9822b" stroke="#8d3a14" strokeWidth="4" />
              <circle cx="50" cy="50" r="37" fill="#f4b236" />
              <circle cx="35" cy="35" r="6" fill="#a82315" />
              <circle cx="65" cy="35" r="6" fill="#a82315" />
              <circle cx="50" cy="68" r="6" fill="#a82315" />
              <circle cx="30" cy="54" r="5" fill="#a82315" />
              <circle cx="70" cy="54" r="5" fill="#a82315" />
              <line x1="50" y1="13" x2="50" y2="87" stroke="#8d3a14" strokeWidth="2.5" />
              <line x1="17.9" y1="31.5" x2="82.1" y2="68.5" stroke="#8d3a14" strokeWidth="2.5" />
              <line x1="17.9" y1="68.5" x2="82.1" y2="31.5" stroke="#8d3a14" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="3" fill="#8d3a14" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8d3a14] block">
              Tamanho Médio (M)
            </span>
            <div className="text-lg font-black text-[#7c2d12] uppercase font-brand">
              Pizza Média
            </div>
            <div className="text-xs font-semibold text-[#634832] flex items-center gap-1.5 mt-0.5">
              <span>🍕 6 Fatias</span>
              <span>•</span>
              <span>Diâmetro ~30 cm</span>
            </div>
            <div className="text-xl font-extrabold text-[#9a3412] mt-1">
              {isDoces ? 'R$ 52,00 a R$ 54,00' : 'R$ 50,00'}
            </div>
          </div>
        </div>

        {/* Pizza Grande */}
        <div className="flex items-center justify-center gap-4 pt-4 md:pt-0 md:pl-4">
          <div className="shrink-0 drop-shadow-sm">
            <svg width="64" height="64" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="#d9822b" stroke="#8d3a14" strokeWidth="4" />
              <circle cx="50" cy="50" r="37" fill="#f4b236" />
              <circle cx="34" cy="30" r="5" fill="#a82315" />
              <circle cx="66" cy="30" r="5" fill="#a82315" />
              <circle cx="28" cy="58" r="5" fill="#a82315" />
              <circle cx="72" cy="58" r="5" fill="#a82315" />
              <circle cx="50" cy="72" r="5" fill="#a82315" />
              <circle cx="50" cy="27" r="5" fill="#a82315" />
              <line x1="50" y1="13" x2="50" y2="87" stroke="#8d3a14" strokeWidth="2.5" />
              <line x1="13" y1="50" x2="87" y2="50" stroke="#8d3a14" strokeWidth="2.5" />
              <line x1="23.8" y1="23.8" x2="76.2" y2="76.2" stroke="#8d3a14" strokeWidth="2.5" />
              <line x1="23.8" y1="76.2" x2="76.2" y2="23.8" stroke="#8d3a14" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="3" fill="#8d3a14" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8d3a14] block">
              Tamanho Família (G)
            </span>
            <div className="text-lg font-black text-[#7c2d12] uppercase font-brand">
              Pizza Grande
            </div>
            <div className="text-xs font-semibold text-[#634832] flex items-center gap-1.5 mt-0.5">
              <span>🍕 8 Fatias</span>
              <span>•</span>
              <span>Diâmetro ~35 cm</span>
            </div>
            <div className="text-xl font-extrabold text-[#9a3412] mt-1">
              {isDoces ? 'R$ 65,00 a R$ 68,00' : 'R$ 62,00'}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-dashed border-[#d8c6b2] text-center">
        <p className="text-xs font-bold text-[#8d3a14] uppercase tracking-wide">
          ✨ Dica Touros: Você pode escolher até 2 sabores na mesma pizza!
        </p>
      </div>
    </div>
  );
};
